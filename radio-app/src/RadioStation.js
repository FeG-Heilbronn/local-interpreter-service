import { reactive, readonly } from "vue";
import { httpClient } from "./EasyHttps.js";

const ProblematicMdnsName = "http://feg-server.local:8000"
const hostMatcher = new RegExp(ProblematicMdnsName,"i");

export const RadioBase = "http://feg-server.fritz.box:8000"

export class RadioStation {
    constructor(name, language, url) {
        this.endpoint = name;
        this.name = language;
        this.route = url;
    }
}

export const state = reactive({
    stations: [
        // {
        // endpoint: "sw890cl/swr3/play.aac",
        // route: "https://liveradio.swr.de/sw890cl/swr3/play.aac",
        // name: "SWR3"
        // }
    ],
})

export const getters = {
    activeStations: () => state.stations,
}

export const mutations = {
    appendStation: (station) => getters.activeStations().push(station),
    clearStations: () => {
        const stations = getters.activeStations();
        while (stations.length > 0) { stations.pop(); }
    },
    queryStations: () => {
        // Rocket - Streaming Audio Server
        // httpClient.get(RadioBase + "/health")
        // .then((health) => {
        //   Object.keys(health.mounts).forEach((station) => {
        //     const interpreter = new RadioStation(station, health.mounts[station].metadata.now_playing);
        //     mutations.appendStation(interpreter);
        //   });
        // })
        // .catch((err) => console.warn("Failed to query radio-channels: " + err));

        const processDescriptor = (station) => {
            let name = station.server_name;
            if (station.title)
                name = `${station.server_name} : ${station.title}`;

            const url = station.listenurl.replace(hostMatcher, RadioBase);
            const interpreter = new RadioStation(station.server_name, name, url);
            mutations.appendStation(interpreter);
        }

        httpClient.get(RadioBase + "/status-json.xsl")
            .then((data) => {
                if (data.icestats.server_id != "Icecast 2.4.4")
                    console.warn("Version 2.4.4 required may cause malfunction");

                if (Array.isArray(data.icestats.source)) {
                    data.icestats.source.forEach((station) => processDescriptor(station));
                } else {
                    processDescriptor(data.icestats.source);
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