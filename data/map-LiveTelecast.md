
# 直播平台技术图谱

----
## 直播

----
### 采集
- **iOS** 
  * HTTP Live Streaming
  * DirectShow
- **Android**
  * setPreviewCallback
  * MediaRecorder
  * ffmpeg
  * getstreamer
 * 机型适配
- **PC** 
  * mjpg-streame
  * jpeg
  * 摄像头驱动
- **摄像机**

### 前处理
 - **美颜**
 - **GPU计算**
     * OpenCL
     * DirectCompute
     * GPGPU
     * C++AMP
 - **滤镜**
 - **画面风格**
  * GPUImage
 - **人脸识别**
   * 人脸特征点的识别
   * 整幅人脸图像的识别
   * 模板的识别
   * 经网络进行识别

### 编码
 - **硬件兼容性**
 - **iOS**
  * VideoToolbox.framework
 - **H.264**
 - **H.265**
 - **MPEG**

### 传输
 - **方案**
  * Socket
  * HTTP
  * RTP/RTSP
 - **CDN**
 - **云服务**
 - **TCP/IP优化**

### 服务器处理
 - **RTMP**
 - **HLS**
 - **FLV**

### 解码
- **硬件兼容性**
- **H.264**
- **MPEG**

### 渲染

### 音频
- **降噪**
  * Kamath
  * Rangachari
- **编解码**
  * AAC
  * MP3

### Web音视频标准
 - **WebRTC**
 - **客户端**
    - Chrome/firefox/Opera
      - javascript
    - iOS
      - ObjectC Cordova
 - **协议**
   * JSEP
   * ICE
   * SIP
   * WebSocket
 - **通讯方式**
   * 星型
   * MCU
   * Router
 - **编解码**
    - HD264
    - VP8
 - **穿墙服务**
    - stun
    - turnserver/coturn
 - **signal**
    - socket.io-client
    - socket.io
    - signalmaster
    - apprtc
 - **Media server**
    - janus-gateway
    - kurento
    - freeswitch

----
## 应用服务
- **IM**
- **通知**
- **礼物系统**
- **支付**
- **运营系统**
- **统计**

----
## 统计服务
- **数据库**
  * **PostgreSQL**
  * **MySQL**
  * **MongoDB**
  * **Redis**
  * **HBase**
- **缓存**
  * **Nginx**
  * **Squid**
  * **Varnish**
- **分布式文件系统**
  * **Ceph**
  * **GlusterFS**
  * **MooseFS**
  * **MogileFS**
  * **FastDFS**
  * **HDFS**
  * **OpenAFS**
  * **GFS**
  * **KFS**
  * **TFS**
- **消息队列**
  * **RabbitMQ**
  * **ActiveMQ**
  * **Kafka**
  * **MetaQ**
  * **NSQ**
  * **ZeroMQ**
  * **MemcacheQ**
  * **HTTPSQS**
  * **Resque**
- **运维**
