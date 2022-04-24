const ProblematicMdnsName = "http://feg-server.local:8000"
const RadioBase = "http://feg-server.fritz.box:8000"

class EasyHttpClient {
    async get(url) {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }
}

class RadioStation {
    constructor(name, language, url, codec) {
        this.endpoint = name;
        this.name = language;
        this.route = url;
        this.codec = codec;
    }
}


const stationControl = (function () {
    const nothingFound = `
    <div class="row warning text-">
        <h3>Keine Station gefunden </h3>
        <h5>Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut</h5>
    </div>`;
    function CreateStation(id, language, url, codec) {
        id = id.replace(/\s+/gm,'');
        return `
        <div class="row player-controls">
            <h3>${language}</h3>
            <audio id="${id}" controls="" preload="none" controlsList="nodownload">
                <source src="${url}" type="${codec}">
            </audio>
        </div>`;
    }

    const hostMatcher = new RegExp(ProblematicMdnsName,"i");

    const stationsContainer = document.getElementById("stations");

    const httpClient = new EasyHttpClient();
    function setUpView(stations) {
        stations.forEach((station) => {
            const child = document.createElement("div");
            child.innerHTML = CreateStation(station.endpoint, station.name, station.route, station.codec);
            stationsContainer.appendChild(child)
        })
    }

    function init() {   
        let stations = [];

        const processDescriptor = (station) => {
            let name = station.server_name;
            if (station.title)
                name = `${station.server_name} : ${station.title}`;

            const url = station.listenurl.replace(hostMatcher, RadioBase);
            const interpreter = new RadioStation(station.server_name, name, url, station.server_type);
            stations.push(interpreter);
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

                setUpView(stations);
            })
            .catch((err) => console.warn("Failed to query radio-channels: " + err));
    }

    return {
        init: init,
    }
})();

stationControl.init();
