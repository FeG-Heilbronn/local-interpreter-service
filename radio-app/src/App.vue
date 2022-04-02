<template>
  <div class="container">
    <div class="row justify-content-center align-items-center mb-4">
      <div class="col-auto">
        <img
          alt="Site Logo"
          src="./assets/FeGLogo.svg"
          class="img-fluid"
          style="width: 60px; margin: 16px"
        />
      </div>
      <div class="col-auto">
        <span class="h1">FeG Übersetzung</span>
      </div>
    </div>

    <div class="row auto justify-content-center">
      <div class="col-auto">
        <h2>Verfügbare Kanäle:</h2>
      </div>
      <div class="col-auto">
        <button class="button reload-button" value="Refresh" @click="onRefresh">
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>

    <div v-if="stations.length">
      <RadioPlayer
        v-for="station in stations"
        :key="station.endpoint"
        :source="station.route"
        :language="station.name"
      />
    </div>
    <div class="row m-4" v-else>
      <div class="col badge bg-warning text-dark">
        <h3>Keine Station gefunden</h3>
      </div>
    </div>
  </div>
</template>

<script>
import RadioPlayer from "./components/RadioPlayer.vue";
import Radio from "./RadioStation.js";
export default {
  name: "App",
  components: {
    RadioPlayer,
  },
  mounted() {
    Radio.mutations.queryStations();
  },
  methods: {
    onRefresh() {
      Radio.mutations.clearStations();
      Radio.mutations.queryStations();
    },
  },
  computed: {
    stations() {
      return Radio.getters.activeStations();
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.button {
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: #5f9f72;
  color: #fff;
  border-radius: 100%;
}
.reload-button {
  width: 40px;
  height: 40px;
  font-size: 20px;
  margin-right: 12px;
}
</style>
