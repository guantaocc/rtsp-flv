<template>
  <div id="app">
    <FlvPlayer :id="1" />
    <FlvPlayer :id="2" />
    <FlvPlayer :id="3"/>
    <FlvPlayer :id="4"/>
    <FlvPlayer :id="5"/>
    <FlvPlayer :id="6"/>
    <FlvPlayer :id="7"/>
    <FlvPlayer :id="8"/>
    <FlvPlayer :id="9"/>
    <FlvPlayer :id="10"/>
  </div>
</template>
<script>
import FlvPlayer from '@/components/FlvPlayer'
export default {
  components: {
    FlvPlayer
  }
}
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
