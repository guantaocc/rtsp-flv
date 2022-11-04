// 启动 ffmpeg

Stream = require('node-ffmpeg-stream').Stream;
stream = new Stream ({
  name: 'name',
  url: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4',
  wsPort: 9999,
  options: { 
    '-r': 30,
    '-an': ''
  }
})