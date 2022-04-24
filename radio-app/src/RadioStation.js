import { reactive, readonly } from "vue";
import { httpClient } from "./EasyHttps.js";

const ProblematicMdnsName = "http://feg-server.local:8000"
const hostMatcher = new RegExp(ProblematicMdnsName,"i");

export const RadioBase = "http://feg-server.fritz.box:8000"

export class RadioStation {
    constructor(name, language, url, codec) {
        this.endpoint = name;
        this.name = language;
        this.route = url;
        this.codec = codec;
    }
}

export let ServerStatus = {
    Init: 1,
    Error: 2,
    NoStations: 3,
    Success: 4,
}

export const state = reactive({
    stations: [
    ],
    status: "init"
})

export const getters = {
    activeStations: () => state.stations,
    queryStatus: () => state.status,
}

export const mutations = {
    appendStation: (station) => getters.activeStations().push(station),
    clearStations: () => {
        const stations = getters.activeStations();
        while (stations.length > 0) { stations.pop(); }
    },
    queryStations: () => {

        const processDescriptor = (station) => {
            let name = station.server_name;
            if (station.title)
                name = `${station.server_name} : ${station.title}`;

            const url = station.listenurl.replace(hostMatcher, RadioBase);
            const interpreter = new RadioStation(station.server_name, name, url, station.server_type);
            mutations.appendStation(interpreter);
        }

        state.status = "error"; // ServerStatus.Error;
        
        httpClient.get(RadioBase + "/status-json.xsl")
            .then((data) => {
                if (data.icestats.server_id != "Icecast 2.4.4")
                    console.warn("Version 2.4.4 required may cause malfunction");

                state.status = "empty"; // ServerStatus.Status_NoStations;
                if (data.icestats["source"]) {
                    state.status = "success"; // ServerStatus.Status_Success;
                    console.log("Received Data: ", data.icestats.source);
                    if (Array.isArray(data.icestats.source)) {
                        data.icestats.source.forEach((station) => processDescriptor(station));
                    } else {
                        processDescriptor(data.icestats.source);
                    }
                }
            })
            .catch((err) => console.warn("Failed to query radio-channels: " + err));
    },
}

export default {
    state: readonly(state),
    getters,
    mutations
}