<template>
  <div class="row justify-content-center">
    <div class="row col-auto player-controls">
      <audio class="visually-hidden" ref="stream">
        <source :src="source" :type="codec" />
      </audio>
      <button
        name="play-pause"
        class="col-auto button play-pause-button"
        @click="onPlayPause"
      >
        <i :class="playPauseSymbol"></i>
      </button>
      <div class="col-auto">
        <div class="current-language">
          <span> {{ language }} </span>
        </div>
        <div class="volume-controls">
          <input
            class="volume"
            type="range"
            name="volume"
            min="0"
            max="1"
            step="0.05"
            :value="volume"
            @input="newVolumeSet"
            ref="volumeSet"
          />
        </div>
      </div>
      <button
        name="mute"
        class="col-auto button mute-button"
        @click="onMuteUnmute"
      >
        <i :class="muteUnmuteSymbol"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioPlayer",
  props: {
    source: {
      type: String,
      require: true,
    },
    language: {
      type: String,
      require: true,
    },
    codec: {
      type: String,
      require: true,
    },
  },
  methods: {
    onPlayPause() {
      if (this.isPlaying === true) {
        this.$refs.stream.pause();
      } else {
        this.$refs.stream.play();
        this.updateStreamVolume(Math.max(0.3, this.volume));
      }
      this.isPlaying = !this.isPlaying;
    },
    onMuteUnmute() {
      if (this.isMuted === true) {
        this.updateStreamVolume(this.volumeSet);
      } else {
        this.volumeSet = this.volume;
        this.updateStreamVolume(0);
      }
      this.isMuted = !this.isMuted;
    },
    newVolumeSet() {
      this.updateStreamVolume(this.$refs.volumeSet.value);
      this.isMuted = this.volume == 0;
    },
    updateStreamVolume(vol) {
      this.volume = vol;
      this.$refs.stream.volume = vol;
    },
  },
  computed: {
    playPauseSymbol() {
      return this.isPlaying == true
        ? "fa-solid fas fa-pause"
        : "fa-solid fas fa-play";
    },
    muteUnmuteSymbol() {
      return this.isMuted == true
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
    },
    currentVolume() {
      return this.volume;
    },
  },
  data() {
    return {
      isPlaying: false,
      isMuted: false,
      volume: 0.5,
      volumeSet: 0.5,
    };
  },
};
</script>

<style scoped>
.play-pause-button {
  width: 70px;
  height: 70px;
  font-size: 25px;
  margin: 12px;
  margin-right: 24px;
}

.mute-button {
  width: 30px;
  height: 30px;
  margin-right: 12px;
}

.player-controls {
  display: flex;
  align-items: center;
  background: #97ffd0;
  border-radius: 12px;
  margin: 20px;
}
.volume-controls {
  display: flex;
  align-items: center;
}
.volume {
  appearance: none;
  border: 1px solid #000;
  border-radius: 50px;
  overflow: hidden;
  width: 6cm;
  margin: 12px;
}

.current-language {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-size: 22px;
}
input[type="range"]:focus {
  border-radius: 50px;
  box-shadow: 0 0 15px -4px #5e9e71;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  height: 15px;
  width: 15px;
  cursor: ew-resize;
  background: #5e9e71;
  box-shadow: -400px 0 0 390px #8ceba8;
  border-radius: 50%;
}
</style>