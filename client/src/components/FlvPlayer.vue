<template>
  <div class="video-box">
    <video controls="controls" class="demo-video" ref="player" muted></video>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  name: "FlvPlayer",
  data() {
    return {
      player: null,
      loading: true,
    };
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.playVideo();
  },
  methods: {
    playVideo() {
      const time1 = new Date().getTime();
      if (flvjs.isSupported()) {
        let video = this.$refs.player;
        if (video) {
          this.player = flvjs.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            url: `ws://192.168.1.198:3000/rtsp/${this.id}?url=rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4`,
          });
          this.player.attachMediaElement(video);
          this.player.load();
          this.player.play().then(() => {
            console.log(new Date().getTime() - time1);
            this.loading = false;
          });
        }
      }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.unload();
        this.player.destroy();
        this.player = null;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.video-box {
  width: 600px;
  height: 400px;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>