
#直播平台技术图谱
----
##直播
----
###采集
- **iOS** 
- **Android**
  * 机型适配
- **PC** 
  * 摄像头驱动
- **摄像机**

### 前处理
- **美颜**
  * GPU计算
- **滤镜**
- **画面风格**
- **人脸识别**

### 编码
- **硬件兼容性**
- **H.264**
- **MPEG**

### 传输
- **CDN**
- **云服务**
- **TCP/IP优化**

### 解码
- **硬件兼容性**
- **H.264**
- **MPEG**

### 渲染

### 音频
- **降噪**
- **编解码**
  * AAC
  * MP3

### Web音视频标准
- **WebRTC**
  - 客户端
    - Chrome浏览器
      - javascript
    - IOS
      - ObjectC Cordova
  - 编解码
    - HD264
    - VP8
  - 穿墙服务
    - stun
    - turnserver/coturn
  - signal
    - socket.io-client
    - socket.io
    - signalmaster
    - apprtc
  - Media server
    - janus-gateway
    - kurento
    - freeswitch

----
##应用服务
- **IM**
- **通知**
- **礼物系统**
- **支付**
- **运营系统**
- **统计**

----
## 统计服务
- **数据库**
- **缓存**
- **分布式文件系统**
- **消息队列**
- **运维**

