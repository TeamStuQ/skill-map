# Android ROM 开发技能图谱

## 1. 操作系统

* Ubuntu(首选)
* MacOSX

## 2. 编程语言

* Java
    * JNI(务必掌握)
* C++
* C

## 3. 源码

### 3.1 管理方式

* Codelines/Branches/Releases
* Codenames/Tags/Build Numbers

### 3.2 源码地址

* [官方源码](https://android.googlesource.com)
* [Github镜像](https://github.com/android)
* [高通扩展源码](https://www.codeaurora.org/projects/all-active-projects/android-msm)
* [CM源码](https://github.com/cyanogenmod)
* [MIUI部分源码](https://github.com/MiCode)

### 3.3 下载

* Repo/Git

### 3.4 阅读修改工具

* SourceInsight(首选)
* Eclipse
* Android Studio

### 3.5 编译

* 搭建编译环境
* Makefile编译体系

## 4. 层次体系

### 4.1 核心Applications

* Phone/Contacts/MMS
* Camera/Gallery/Music/Video
* Settings

### 4.2 Frameworks

* Telephony
* MultiMedia
* Connectivity
* Window/View/ActivityManager
* Surface/Graphics

### 4.3 Native Libs

### 4.4 Android Runtime

* Dalvik
* ART

### 4.5 HAL

### 4.6 Linux Kernel

### 4.7 Driver

## 5. 核心系统

### 5.1 Audio

### 5.2 Bluetooth

### 5.3 Camera

### 5.4 Media

### 5.5 Storage

* Internal
* External
* OTG

### 5.6 Sensor

### 5.7 Input

* EventHub
* Touch

### 5.8 Accessories

### 5.9 DRM

### 5.10 Power

### 5.11 Window

* WindowManager
* View
* ActivityManagerService

### 5.12 Telephony

* Phone
* RIL
* ATCommands
* Modem

## 6 辅助技术
### 6.1 刷机
* fastboot
    * unlock
    * flash
* bootloader

### 6.2 设备分区

* boot
* system
* vendor
* userdata
* cache
* recovery
* misc

### 6.3 product配置

* Carrier
* File System
* Low RAM
* Runtime Permission(6.0)
* ...

### 6.4 调试工具

* GDB
* Valgrind
* Systrace
* Dumpsys
    * Network usage
    * RAM usage

### 6.5 兼容测试

* CTS源码下载
* CTS设置和执行

### 6.6 OTA升级

* 升级过程
    * 全量升级
    * 增量升级

* 升级优化
    * 缩减升级包







