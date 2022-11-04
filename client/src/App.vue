<template>
  <div id="app">
    <!-- <FlvPlayer :id="1" /> -->
    <CanvasPlayer />
    <jsmpeg-player :url="url" />
  </div>
</template>
<script>
// import FlvPlayer from "@/components/FlvPlayer";
import JsmpegPlayer from '@/components/jsmpeg-player/jsmpeg-player'
import CanvasPlayer from "@/components/CanvasPlayer";
export default {
  components: {
    // FlvPlayer,
    CanvasPlayer,
    JsmpegPlayer
  },
  data() {
    return {
      url: "ws://localhost:9999",
    };
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
