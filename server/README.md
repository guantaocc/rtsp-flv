## ffmpeg下载


https://www.gyan.dev/ffmpeg/builds/#release-builds


## 解释
https://zhuanlan.zhihu.com/p/435343511

## ffmpeg

ffmpeg相关

http://www.manongjc.com/detail/54-idnkdidsnhhrtfi.html
https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html
https://blog.csdn.net/a843334549/article/details/120697574


流媒体服务框架
https://github.com/ZLMediaKit/ZLMediaKit


windows端 探测端口
netstat -ano | findstr “8111”

jsmpeg相关


## jsmfpg http中继器 转换流


### ffmpeg命令 推送到 websocket端口

8082 输出到 前端端口 8081 为接收 ffmpeg的端口

```bash
node websocket-relay.js 1234 8081 8082
```

### ffmpeg推送流到端口

海康摄像头

```bash
ffmpeg -rtsp_transport tcp -i rtsp://[用户名]:[密码]@[ip]:554/h264/ch1/main/av_stream -q 0 -f mpegts -codec:v mpeg1video -s 1280x720 -b:v 1500k -codec:a mp2 -ar 44100 -ac 1 -b:a 128k http://127.0.0.1:8081/1234

```

其他流

```bash
ffmpeg -rtsp_transport tcp -i "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" -q 0 -f mpegts -codec:v mpeg1video -s 1280x720 -b:v 1500k -codec:a mp2 -ar 44100 -ac 1 -b:a 128k http://127.0.0.1:8081/1234

```

本地桌面流

```bash
ffmpeg -f gdigrab -i desktop -q 0 -f mpegts -codec:v mpeg1video -s 1280x720 -b:v 1500k -codec:a mp2 -ar 44100 -ac 1 -b:a 128k http://127.0.0.1:8081/1234

```

测试流
```bash
ffmpeg -rtsp_transport tcp -i "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" -f mpegts -an -codec:v mpeg1video -vf scale=480:-1 http://127.0.0.1:8081/1234
```

### 前端接收流


## node-rtsp-stream 模块

```js
const Stream = require("node-rtsp-stream");
const stream = Stream({
  name: "xxx",
  streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
  wsPort: 9999,
  ffmpegOptions: {
    "-rtsp_transport": "tcp",
    "-q": "0",
    "-f": "mpegts",
    "-codec:v": "mpeg1video",
    "-s": "1280x720",
    "-b:v": "1500k",
    "-codec:a": "mp2",
    "-ar": "44100",
    "-ac": "1",
    "-b:a": "128k",
  },
});

```