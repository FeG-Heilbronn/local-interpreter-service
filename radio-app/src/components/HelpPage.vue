<template>
  <div class="row bg-secondary bg-opacity-25 rounded p-3">
    <div class="col-2">
      <h2>Help</h2>
    </div>
    <div class="col-10">
      <ul class="nav nav-tabs nav-pills" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            type="button"
            id="tabFade-1"
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#tabFade-pane-1"
            role="tab"
            aria-controls="tabFade-pane-1"
            aria-selected="true"
          >
            Deutsch
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            type="button"
            id="tabFade-2"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabFade-pane-2"
            role="tab"
            aria-controls="tabFade-pane-2"
            aria-selected="false"
          >
            English
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            type="button"
            id="tabFade-3"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabFade-pane-3"
            role="tab"
            aria-controls="tabFade-pane-3"
            aria-selected="false"
          >
            Arabic
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            type="button"
            id="tabFade-4"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabFade-pane-4"
            role="tab"
            aria-controls="tabFade-pane-4"
            aria-selected="false"
          >
            Farsi
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div
          id="tabFade-pane-1"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="tabFade-1"
        >
          <h3 class="mt-2">Allgemein</h3>
          Nach dem Laden der Seite wird geprüft welche Übersetzungen zur
          Verfügung stehen. Alle aktiven Übersetzungen werden unter
          <strong>Verfügbare Kanäle</strong> gelistet. Wenn Sie die gewünschte
          Übersetzung nicht sehen, versuchen Sie es zu einem späteren Zeitpunkt
          nochmal indem sie die Seite neu laden oder auf
          <i class="fa-solid fa-arrows-rotate"></i> drücken. Sie können den
          gewünschten Kanal direkt starten und bei Bedarf auch unterbrechen.
          <h3 class="mt-2">Bedienung</h3>
          <ul>
            <li>
              Die gewünschte Übersetzung kann mit
              <i class="fa-solid fas fa-play"></i> gestartet werden und mit
              <i class="fa-solid fas fa-pause"></i> unterbrochen werden. Sobald
              sie die Wiedergabe fortsetzen, geht es an der Stelle weiter an der
              Sie pausiert haben.
            </li>
            <li>
              Um zum aktuellsten Zeitpunkt zu springen, müssen Sie die
              Kanalliste mit
              <i class="fa-solid fa-arrows-rotate"></i> aktualisieren und die
              Übersetzung neu starten.
            </li>
            <li>
              Die Lautstärke kann mit dem Balken unter dem Namen des Streams
              eingestellt werden.
            </li>
            <li>
              Die Wiedergabe kann mit
              <i class="fa-solid fa-volume-xmark"></i> stumm und mit
              <i class="fa-solid fa-volume-high"></i> wieder auf die
              ursprüngliche Lautstärke geschaltet werden.
            </li>
          </ul>
          <h3 class="mt-2">Hinweise</h3>
          <div
            class="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              class="bi bi-exclamation-square me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              ></path>
              <path
                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
              ></path>
            </svg>
            <div>
              Durch den Zugang zum W-LAN erhalten Sie auch Internet-Zugang.
              Bitte nutzen Sie diesen im Laufe des Gottesdienstes möglichst
              nicht, um den Video-Stream des Gottesdienstes nicht zu
              beeinträchtigen.
            </div>
          </div>
        </div>

        <div
          id="tabFade-pane-2"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="tabFade-2"
        >
          <h3 class="mt-2">General</h3>
          After this page is loaded, the available interpreter channels are
          queried. The active channels are listed below
          <strong>Verfügbare Kanäle</strong>
          If you do not see the desired interpretation try to refresh this page
          or hit <i class="fa-solid fa-arrows-rotate"></i> later. You can start
          the desired channel directly by pressing play and if necessary you are
          also able to interrupt playback.
          <h3 class="mt-2">Operation</h3>
          <ul>
            <li>
              The desired interpretation can be started with
              <i class="fa-solid fas fa-play"></i> and paused with
              <i class="fa-solid fas fa-pause"></i>. As soon as you resume
              playback, it will continue from the point where you paused.
            </li>
            <li>
              To jump to the most current time, you must refresh the page or
              update the channel list by
              <i class="fa-solid fa-arrows-rotate"></i> and restart the
              translation.
            </li>
            <li>
              The Volumen can be set with range control which is located below
              the stream name.
            </li>
            <li>
              Playback can be muted with
              <i class="fa-solid fa-volume-xmark"></i> and can be set with
              <i class="fa-solid fa-volume-high"></i> again to its original
              volume.
            </li>
          </ul>
          <h3 class="mt-2">Notes</h3>
          <div
            class="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              class="bi bi-exclamation-square me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              ></path>
              <path
                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
              ></path>
            </svg>
            <div>
              By accessing WIFI, you will also get Internet access. Please do
              not use it during the service, in order to avoid interferences
              with our video stream of the service.
            </div>
          </div>
        </div>
        <div
          id="tabFade-pane-3"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="tabFade-3"
        >
          <h2>Work in Progress - Arabic</h2>
        </div>
        <div
          id="tabFade-pane-4"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="tabFade-4"
        >
          <h2>Work in Progress - Farsi</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>