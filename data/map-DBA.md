# DBA技能图谱

## 网络
- TCP/IP协议
- 工具
    * tcpdump
    * ss

## 数据库类型
- 关系型
    * Oracle,MySQL,DB2,SQLserver
- KV型
    * Redis,RocksDB
- 文档型
    * MongoDB
- 列存储
    * HBase,Cassandra
- 内存数据库
    * SQLite,TimesTen

## 运维工具
- 部署
    * saltstack,puppet,ansible
- 监控
    * cati,zabbix,nigos

## linux基础
- 常用命令
    * ![alt 常用命令](https://github.com/MiliOnE/skill-map/blob/master/data/map-DBA-comands.png?raw=true)
- 文件系统
    * ext4
    * xfs
- io调度
    * deadline,noop,cfq
    * The Linux  I/O Stack Diagram
    * ![alt io调度](https://github.com/MiliOnE/skill-map/blob/master/data/map-DBA-io.jpg?raw=true)

## 硬件
- RAID卡
    * 读写策略
        + WB
        + WT
        + FORCE WB
    * BBU
- SSD
- 网卡
- PCI-E/NVMe

## 开发语言
- python,shell,perl
- java,C/C++,go

## 数据库技能
- 理论知识
    * B*树/B-树/hash/索引原始结构等
    * 事务ACID
    * MVCC
    * 锁机制 行锁/死锁/mutex锁等
    * innodb读写相关操作的原理
    * 分布式事务
- 备份/恢复
    * xtrabackup
    * mysqldump
    * mydumper/myloader
    * mysqlpump/mysqlimport(5.7版本）
    * rsync/qpress压缩
- 高可用
    * HA
        + MHA
        + keepalive
        + PXC
        + zookeeper
    * sharding
        + 水平拆分
        + 垂直拆分
- 中间件
    * TDDL
    * Cobar
    * OneProxy
    * Atlas
    * mango乐视
    * Mycat
    * fabric
- 优化
    * 原则 空间换时间
    * 业务逻辑设计
    * 库/表结构 索引设计
    * 慢查询
    * 拆分
- 工具集
    * pt-tools
    * orzdba,iotop,ytop
    * pstack

## 关联软件
- 消息队列
    * nsq
    * RabbitMq
    * kafka
- 缓存
    * memcache,tair,redis
- DNS
- 搜索
    * ELK,Solr

## 软技能
- 能说
- 会写

