<template>
  <div class="canvas-player">
    <canvas ref="video" id="video-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "CanvasPlayer",
  mounted() {
    const canvasVideo = this.$refs.video;
    // 调取 ffmpeg
    const url = "ws://127.0.0.1:9999";
    const player = new window.JSMpeg.Player(url, {
      canvas: canvasVideo,
      audio: false,
      preserveDrawingBuffer: true,
      onSourceCompleted: () => {
        console.log("completed");
      },
      onPlay: () => {
        console.log("play");
      },
      onPause: () => {
        console.log("pause");
      },
      onEnded: () => {
        console.log("end");
      },
      onStalled: () => {
        console.log("没有足够的数据用于播放");
      },
      onSourceEstablished: () => {
        console.log("第一次收到数据");
      },
    });
    console.log("player", player);
    player.play();
  },
};
</script>

<style>
</style>