import { reactive, readonly } from "vue";
import { httpClient } from "./EasyHttps.js";

export const RadioBase = "http://feg-server.fritz.box:8000"

export class RadioStation {
    constructor(name, language, url) {
        this.endpoint = name;
        this.route = url;
        this.name = language;
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

        const generateStationName = function(station, info) {
            if (info)
                return `${station} : ${info}`;
            return station;
        }

        httpClient.get(RadioBase + "/status-json.xsl")
            .then((data) => {
                if (data.icestats.server_id != "Icecast 2.4.4")
                    console.warn("Version 2.4.4 required may cause malfunction");

                if (Array.isArray(data.icestats.source)) {
                    data.icestats.source.forEach((station) => {
                        const interpreter = new RadioStation(station.server_name, generateStationName(station.server_name, station.title), station.listenurl);
                        mutations.appendStation(interpreter);
                    });
                }
                else {
                    const station = data.icestats.source;
                    const interpreter = new RadioStation(station.server_name, generateStationName(station.server_name, station.title), station.listenurl);
                    mutations.appendStation(interpreter);
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