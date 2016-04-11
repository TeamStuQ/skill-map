# 安全工程师技能图谱

## 基础必备
  
### HTTP抓包与调试
- Firefox插件
   - Firebug(抓包与各种调试)
   - Tamper Data(拦截修改)
   - Live Http Header(重放功能)
   - Hackbar(编码解码/POST提交)
   - Modify Headers(修改头部)

- Fiddler
   - 浏览器代理神器
   - 拦截请求或响应
   - 抓包
   - 重放
   - 模拟请求
   - 编码解码
   - 第三方扩展
      - Watcher(Web前端安全的自动审计工具)        

- Wireshark(各种强大的过滤器语法)
- Tcpdump(命令行的类Wireshark抓包神器)
- Python
   - urllib2
   
### 跳转

- 服务端跳转
 - 302 <?php header("Location: 3.php"); ?>
 - 301 <?php header("HTTP/1.1 301 Moved Permanently"); header("Location: 2.php"); ?>
 - u=urllib2.urlopen(url)后，u.url能得到服务端跳转后的地址

- 客户端跳转

### Office 能力
- Word
- Excel
- PPT 
- yEd
- Visio
- FreeMind

### Linux 基础
- 《鸟哥的Linux私房菜》

### Vim 基础
- [简明 Vim 练级攻略](http://coolshell.cn/articles/5426.html)

### Python 基础
- [官方文档](https://www.python.org/dev/peps/pep-0008/)
- [笨办法学 Python](http://learnpythonthehardway.org/book)
- 《Python 核心编程2》

### 算法
- 快排
- 二分

### 正则表达式
- 调试工具
   - Kodos
   - RegexBuddy
   - Regexper
- [《正则表达式 30 分钟入门教程》](http://deerchao.net/tutorials/regex/regex.htm)
- [《Python 正则表达式操作指南》](http://wiki.ubuntu.org.cn/Python%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97)
- 《精通正则表达式》

### 研发能力
- 瀑布模型
   - 需求->需求分析->设计->开发->测试->上线->运维/运营
- 需求分析能力
- 调试能力
   - 定位 Bug
   - 专业的工具与经验配合
   - 真实模拟调试
   - 缩小范围
      - 构建自己的测试样例
      - 关联模块一个个排除
      - Python单步调试
   - 粗暴调试：print
- 敏捷思想
   - 快速迭代
   - 任务拆细
   - v1原则：定义目标，优先完成v1
   - 习惯 Wiki 记录

### 翻墙技能

## Web安全

### Web服务组件
- ![Web 服务组件层级图](http://blog.knownsec.com/Knownsec_RD_Checklist/res/web_component.png)
- [钟馗之眼](http://zoomeye.org)

### 安全维度
- 漏洞
- 风险
- 事件

### Web安全标准
- OWASP
- WASC

### 实战环境
- XSS
- SQL
- i春秋
- Sebug + ZoomEye

## 工具
### Firefox
- Firebug（调试JavaScript，HTTP请求响应观察，Cookie，DOM树观察等）
- Tamper Data（拦截修改）
- Live Http Header（重放功能）
- Hackbar（编码解码/POST提交）
- Modify Headers（修改头部）
- [GreaseMonkey](http://userscripts.org/scripts/show/119798) 
- NoScript（进行一些JavaScript的阻断）
- AutoProxy（翻墙必备）

### Chrome
- F12（开发者工具，功能==Firebug+本地存储观察等）
- SwichySharp（翻墙必备）
- [CookieHacker](http://evilcos.me/?p=366)

### Web2.0 Hacking
- [XSS'OR](http://evilcos.me/lab/xssor/)
- [XSSEE 3.0 Beta](http://evilcos.me/lab/xssee/)
- [Online JavaScript beautifier](http://jsbeautifier.org/)
- [BeEF](http://beefproject.com/)

### HTTP代理
- Fiddler（经典Web调试代理工具）
- Burp Suite（神器）
- mitmproxy

### 漏洞扫描
- AWVS
- Nmap
- Python自写脚本/工具

### 漏洞利用
- sqlmap（SQL注入利用最牛神器）
- Metasploit（最经典的渗透框架）
- Hydra（爆破必备）

### 抓包工具
- Wireshark（抓包必备）
- Tcpdump（Linux下命令行抓包）

### Sebug + ZoomEye

### Kali Linux
### 书籍资料
- 《黑客攻防技术宝典（Web实战篇）》
- 《白帽子讲Web安全》
- 《Web前端黑客技术揭秘》
- 《Web之困》
- 《SQL注入攻击与防御》
- papers
   - [exploit-db.com/papers](http://www.exploit-db.com/papers/)
   - BlackHat/Defcon/XCon/KCon/国内各安全沙龙

## 嵌入式安全

### 路由器安全
- 基础
   - 嵌入式Linux系统方面知识
   - 开发系统互联参考模型-第三层网络层
   - MIPS/ARM汇编知识
   - VxWorks系统方面知识
   - JTAG调试接口规范
   - 嵌入式系统交叉环境开发
   - 路由器芯片方案提供商
      - 博通
      - Atheros
      - TrendChip
      - ACROSPEED
      - IC+
      - 瑞昱
      - ...
- 站点
   - [OpenWrt.org](https://www.openwrt.org/)
   - [routerpwn.co](http://routerpwn.com/) 
   - [see.sl088.com(Uboot_编译)](http://see.sl088.com/wiki/Uboot_%E7%BC%96%E8%AF%91)
   - [devttys0.com](http://www.devttys0.com/)

- 工具
 - Binwalk
 - IDA Pro
 - gdb/gdbserver
 - qemu-system
 - qemu-user-static
 - Smiasm
 - Metasm
 - JTAG硬件调试器

### 摄像头安全
- [openipcam](http://www.openipcam.com/)
- [US-13-Heffner-Exploiting-Network-Surveillance-Cameras-Like-A-Hollywood-Hacker-Slides.pdf](https://media.blackhat.com/us-13/US-13-Heffner-Exploiting-Network-Surveillance-Cameras-Like-A-Hollywood-Hacker-Slides.pdf)

### 工控安全

#### 基础
   - 工业生产环境的基本结构，如：SCADA、PCS
   - 工业生产环境的信息安全风险点（可参考DHS出版物）
   - 工控网络组态、逻辑开发、应用组态的基本技术方法
   - 抓包、看RFC分析几个常规工业以太网协议，如：Profinet、Modbus
   - 熟悉 PLC（记得买以太网模块）

#### 站点
 - 事件跟踪分析
      - [plcscan.org](http://plcscan.org/blog/ )
      - [scadastrangelove.blogspot.kr](http://scadastrangelove.blogspot.kr)
      - [phdays.com](http://www.phdays.com/)
      - [scadasl.org](http://www.scadasl.org)
      - [scadahacker.com](https://scadahacker.com)
        - [Duqu](https://scadahacker.com/resources/duqu.html) 
        - [Stuxnet](https://scadahacker.com/resources/stuxnet.html)
        - [Havex](https://scadahacker.com/resources/havex.html)
 - 标准协会/测试工具
   - [DHS CET套件](http://ics-cert.us-cert.gov/Assessments)
   - [NERC ES-ISAC](http://www.esisac.com/SitePages/Home.aspx)
   - [ICS-ISAC](http://ics-isac.org)
   - [NTSB美国国家工控测试床](http://energy.gov/oe/downloads/common-cyber-security-vulnerabilitiesobserved-control-system-assessments-inl-nstb)
   - [NIST SP 800-82](http://csrc.nist.gov/publications/nistpubs/800-82/SP800-82-final.pdf)
   - [ISA-99控制系统安全协会](http://isa99.isa.org/ISA99%20Wiki/Home.aspx)
   - [NERC CIP标准](http://www.nerc.com/pa/Stand/Pages/ReliabilityStandards.aspx)

#### 工具
- 仿真类
	 - 电力仿真软件testhaness
	 - Modbus仿真软件ModScan
	 - 电力104协议仿真软件PMA
- 测试类
	 - Wurldtech Achilles
	 - Codenomicon Defensics
	 - Spirent
	 - BPS
- 源代码
	 - 发现
	 	- [plcscan](https://code.google.com/p/plcscan/)
	 	- [modscan](https://code.google.com/p/modscan/)  
	 	- [scan7](https://github.com/arnaudsoullie/scan7)
	 	- [atimorin](https://github.com/atimorin)
	 	- [Redpoint](https://github.com/digitalbond/Redpoint)
 
	 - 操纵
	 	- [modbus](https://www.scadaforce.com/modbus)
	 	- [pymodbus](https://github.com/bashwork/pymodbus)
	 	- [modbus-cli](https://rubygems.org/gems/modbus-cli)
	 	- [libnodave](http://libnodave.sourceforge.net)
	 	- [dnp3](https://code.google.com/p/dnp3)
	 - 异常监测
	 	- [snort-292-scada-preprocessors](http://blog.snort.org/2012/01/snort-292-scada-preprocessors.html) 
	 	- [quickdraw](http://www.digitalbond.com/tools/quickdraw/)
 	 - [Fuzz](https://github.com/jseidl/peach-pit/blob/master/modbus/modbus.xml)

#### 其他
   - [ZoomEye工控专题](http://ics.zoomeye.org/) 
   - [Shodan工控专题](https://www.shodan.io/report/l7VjfVKc)
   - [网络空间工控设备的发现与入侵](https://github.com/evilcos/papers/blob/master/网络空间工控设备的发现与入侵.ppt)

### zoomeye.org
- [全球可以找到无数真实路由器/摄像头/工控设备等](http://www.zoomeye.org/search?q=app:%22MikroTik%20RouterOS%22&from=dork)

## 研发清单
#### 编码环境
- pip
- Vagrant
- tmux/screen
- vim
- Markdown
- zsh + oh-my-zsh
- Python2.7
- [Django1.4](http://djangobook.py3k.cn/2.0/)
   - [Django Debug Toolbar](http://django-debug-toolbar.readthedocs.org/en/latest/)
   - 其他框架
      - web.py
      - Flask
      - Tornado
- node.js
- Ubuntu/Gentoo/Centos
- ipython
- 版本控制
   - 废弃SVN，全面拥抱Git
   - GitLab
- Nginx+uWSGI


#### Python
- 官方手册

#### Linux/UNIX
- 书
   - 《鸟哥的Linux私房菜》
   - 《Linux Shell脚本攻略》
   - 《UNIX编程艺术》
   - 《Software Design 中文版》（01／02／03版）
- Linux 作为电脑默认操作系统

#### 前端
- 了解 DOM
   - 《JavaScript DOM编程艺术》
   - 前端安全必要基础
- 库
   - jQuery
   - D3.js
   - ECharts
   - Google API
   - ZoomEye Map组件
   - AngularJS
   - Bootstrap

#### 爬虫进阶
- 代理池
- 网络请求
   - wget/curl
   - urllib2/httplib2/requests
   - idea scrapy
- 验证码破解
   - pytesser

#### 调度
- crontab是最原生的定时调度
- 基于redis实现的分布式调度
- 基于rpyc实现的分布式调度
- celery/gearman等调度框架

#### 并发
- 线程池
- 协程
   - gevent
- 多进程
   - os.fork
   - idea multiprocessing

#### 数据结构
- JSON
- cPickle
- protobuf

#### 数据存储及处理
- 数据库
   - MySQL
   - MongoDB
   - Cassandra
   - Hadoop体系
   - Redis
   - Sqlite
   - bsddb
   - ElasticSearch
- 大数据处理
   - Hive
   - Spark
   - ELK
      - ElasticSearch
      - Logstash
      - Kibana

#### DevOps
- SSH证书
- Fabric
- SaltStack
- puppet
- pssh/dsh
- 运维进阶

#### 调试
- pdb
- logging
- Sentry
- strace/ltrace
- lsof
- 性能
   - Python内
      - timeit
      - cProfile
      - [Python性能分析指南](http://www.oschina.net/translate/python-performance-analysis)
   - Python外
      - top/htop/free/iostat/vmstat/ifconfig/iftop...

#### 算法
- 分词
- 贝叶斯
- 神经元
- 遗传算法
- 聚类/分类
- ...

#### 持续集成
- 自测试
   - nose
- Jenkins

#### 安全
- [《程序员与黑客》](http://www.infoq.com/cn/presentations/programmers-and-hackers)

#### 协作
- Trello/Slack/Tower/微信/立会

## 设计思想
- 人人都是架构师：具备架构思想是一件多酷的事
- 实战出真知
- 如何设计
   - [任务架构设计变迁](http://blog.knownsec.com/Knownsec_RD_Checklist/res/arch_design_evolution.pdf)
   - 松耦合、紧内聚
   - 单元与单元属性
   - 生产者与消费者
- 结构
   - 队列
   - LRU
- 分布式
   - 存储
   - 计算
- 资源考虑
   - CPU
   - 内存
   - 带宽
- 粗暴美学/暴力美学「run it优先」
   - 大数据，找到规律
   - 打通整体，洞察问题
   - 摆脱繁枝末节的束缚
   - 快速迭代出伟大的v1
- 一个字总结 —— 美

## 牛人1,2,3
- 1研究:有足够洞察力
- 2研发:Hack Idea 自己有魄力实现
- 3工程:需要实战、需要工程化

## 移动安全
## 系统安全
## 反病毒
## 云安全
- DDOS
- 接口安全
	- 验证
	- 越权
	- 校验 
	


