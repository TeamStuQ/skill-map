- ### 基础必备
  - #### HTTP抓包与调试
    - ##### Firefox插件
      - Firebug(抓包与各种调试)
      - Tamper Data(拦截修改)
      - Live Http Header(重放功能)
      - Hackbar(编码解码/POST提交)
      - Modify Headers(修改头部)

    - ##### Fiddler
      - 浏览器代理神器
      - 拦截请求或响应
      - 抓包
      - 重放
      - 模拟请求
      - 编码解码
      - ##### 第三方扩展
        - ##### Watcher
          - Web前端安全的自动审计工具
        - Wireshark(各种强大的过滤器语法)
        - Tcpdump(命令行的类Wireshark抓包神器)
        - ##### Python
          - ##### urllib2
            - 打开请求响应调试
            - 编辑urllib2的do_open里的h.set_debuglevel
            - 改为h.set_debuglevel(1)，这时可以清晰看到请求响应数据，包括https
   
  - #### 什么是跳转
    - ##### 服务端跳转
      - 302
      - 301
      - urllib2

    - ##### 客户端跳转

  - #### Office 能力
    - Word
    - Excel
    - PPT 
    - yEd
    - Visio
    - FreeMind

  - #### Linux 基础

  - #### Vim 基础

  - #### Python 基础

  - #### 算法
    - 快排
    - 二分

  - #### 正则表达式
    - ##### 调试工具
      - Kodos
      - RegexBuddy
      - Regexper

  - #### 研发能力
    - 瀑布模型
    - 需求分析能力
    - 调试能力
    - 敏捷思想

  - #### 翻墙技能

- ### Web安全

  - #### Web服务组件

  - #### 安全维度
    - 漏洞
    - 风险
    - 事件

  - #### Web安全标准
    - OWASP
    - WASC

  - #### 实战环境
    - ##### XSS
    - ##### SQL
    - ##### i春秋
    - ##### Sebug + ZoomEye

  - #### 工具
    - ##### Firefox
      - Firebug 调试JavaScript，HTTP请求响应观察，Cookie，DOM树观察等
      - Tamper Data 拦截修改
      - Live Http Header 重放功能
      - Hackbar 编码解码/POST提交
      - Modify Headers 修改头部
      - GreaseMonkey : Original Cookie Injector for Greasemonkey User Link
      - NoScript 进行一些JavaScript的阻断
      - AutoProxy 翻墙必备

    - ##### Chrome
      - F12 打开开发者工具，功能==Firebug+本地存储观察等
      - SwichySharp 翻墙必备
      - CookieHacker

    - ##### Web2.0 Hacking
      - XSS'OR
      - XSSEE 3.0 Beta
      - Online JavaScript beautifier
      - BeEF

    - ##### HTTP代理
      - Fiddler
        非常经典好用的Web调试代理工具
      - Burp Suite
        神器，不仅HTTP代理，还有爬虫、漏洞扫描、渗透、爆破等功能
      - mitmproxy
        Python写的，基于这个框架写神器实在太方便了

    - ##### 漏洞扫描
      - AWVS
        不仅漏扫方便，自带的一些小工具也好用
      - Nmap
        绝对不仅仅是端口扫描！几百个脚本
      - Python自写脚本/工具

    - ##### 漏洞利用
      - sqlmap
        SQL注入利用最牛神器，没有之一
      - Metasploit
        最经典的渗透框架
      - Hydra
        爆破必备

    - ##### 抓包工具
      - Wireshark
        抓包必备
      - Tcpdump
        Linux下命令行抓包，结果可以给Wireshark分析

    - ##### Sebug + ZoomEye

    - ##### Kali Linux

- ### 嵌入式安全
  - #### 路由器安全
    - ##### 基础
      - 嵌入式Linux系统方面知识
      - 开发系统互联参考模型-第三层网络层
      - MIPS/ARM汇编知识
      - VxWorks系统方面知识
      - JTAG调试接口规范
      - 嵌入式系统交叉环境开发
      - 路由器芯片方案提供商

    - ##### 站点
      - OpenWrt.org
      - routerpwn.com 
      - see.sl088.com(Uboot_编译)
      - devttys0.com

    - ##### 工具
      - Binwalk
      - IDA Pro
      - gdb/gdbserver
      - qemu-system
      - qemu-user-static
      - Smiasm
      - Metasm
      - JTAG硬件调试器

    - #### 摄像头安全

    - #### 工控安全
      - ##### 基础
        - 工业生产环境的基本结构，如：SCADA、PCS
        - 工业生产环境的信息安全风险点
        - 工控网络组态、逻辑开发、应用组态的基本技术方法
        - 抓包、看RFC分析几个常规工业以太网协议，如：Profinet、Modbus
        - PLC
      - ##### 站点
      - 事件跟踪分析
      - ##### 标准协会/测试工具
        - DHS CET套件
        - NERC ES-ISAC
        - ICS-ISAC
        - NTSB美国国家工控测试床
        - NIST SP 800-82
        - ISA-99控制系统安全协会
        - NERC CIP标准

      - ##### 工具
        - ##### 仿真类
           - 电力仿真软件testhaness
           - Modbus仿真软件ModScan
           - 电力104协议仿真软件PMA
        - ##### 测试类
           - Wurldtech Achilles
           - Codenomicon Defensics
           - Spirent
           - BPS
        - ##### 源代码
           - 发现
           - 操纵
           - 异常监测

      - ##### 其他
        - ZoomEye 工控
        - Shodan 工控


- ### 移动安全
- ### 系统安全
- ### 反病毒
- ### 云安全
  - DDOS
  - #### 接口安全
     - 验证
     - 越权
     - 校验 
