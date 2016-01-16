# 微服务架构 技能图谱

## 理论基础
### 概念
#### 多微合适
   - 非代码函数
   - 非重写时间
   - 适合团队最重要
     - 独立业务属性
     - 全功能团队	     		
  
#### 进程隔离
  - 服务运行在独立的进程中

#### 轻量级通信
  - 协议跨平台
  - 格式语言无关

#### 独立性
  - 独立开发
  - 独立测试
  - 独立部署
  

### 本质		
  - 服务作为组件
  - 围绕业务组织团队
  - 产品驱动而非项目驱动
  - 技术多样性
  - 业务数据独立
  - 基础设施自动化
  - 演进式架构
  
### 优点	
   - 按需伸缩
   - 独立部署
   - 业务独立
   - 技术多样性

### 缺点
#### 1. 运维成本高
  - 环境配置（Provisioning）
  - 部署
  - 监控 

#### 2. 测试成本高	
  - 自动化测试
  - 契约测试

#### 3. 依赖管理成本高
  - 版本管理
  - 服务依赖
  - 服务治理	

### 与SOA的差异点
   - 实现方式
   - 服务粒度
   - 集成方式
   - 部署方式

## 常用模式	

### 部署模式
  - 单机多实例
  - 单机单实例
  - 容器多实例
  - 容器单实例

### 服务发现	
  - 客户端发现
  - 服务器端发现

#### 常用库/工具
  - Consul
  - Eureka
  - SmartStack
  - Etcd

### API网关
  - 请求转发
  - 响应合成
  - 协议转换
  - 安全认证

### 服务注册
  - 自注册
  - 第三方注册
#### 常用库/工具
    - Consul
    - Eureka

### 服务配置
 	
## 组织结构
- 全功能团队
- 去中心化
- 康威定律

## 数据相关
- 数据库
  - RDBMS
  - NOSQL	
- 数据伸缩
  - 读
  - 写
  - 缓存
- 业务数据隔离


## 安全策略
  - 单点登录
  - 点对点验证
  - 安全网关

## 通信机制
### 同步通信
  - RPC/RMI
  	- Java RMI
  	- Thrift
	- Protocol Buffer
  - REST
	  - HAL

### 异步通信
#### 消息队列
  - ActiveMQ
  - MSMQ
  - RabbitMQ
  
#### 后台任务
  - Sidekiq
  - Resque	


## 开发实践
### 开发模板
#### JAVA栈
  - SpringBoot
  - SpringCloud
  - DropWizard
	
#### Ruby栈（其他脚本语言类似）
  - 代码结构
  - 测试结构

##### 配置文件模板
  	- WEB服务器配置
	- 日志格式
	- 监控文件配置
	- 告警文件配置

##### 部署脚本模板
- Shell
- Chef
- Puppet
- Ansible

##### 持续集成模板
- Jenkins
- Bamboo

### 服务说明文件
- 服务描述
- 责任人
- 请求/响应描述
- 开发环境搭建
- 运行环境
- 测试策略
- 部署方式
- 监控告警

### 服务结构
- 模型表示层
- 业务模型
- 业务逻辑
- 模型存储
- 集成网关	

## 测试实践
### 单元测试
- 基于Mock/Stub
- 基于真实依赖

### 集成测试
- 服务间集成
- 数据库集成
- 与第三方接口集成

### 组件测试
- 进程内
- 进程外

### 契约测试
- PACT
- PACTO

### E2E测试
- Selenium
- WebDriver

### 性能测试
- Gatling
- JProfiler
- JMeter
- Simperf

### 部署实践
#### 部署环境
- 数据中心/VM
- 公有云(IAAS/PASS)
- 私有云(IAAS/PASS)
- 容器化

#### 应用部署
- 包部署(Tar、RPM、War)
- 映像部署(AMI/...)
- 容器部署(Docker)

#### 基础设施部署工具
- Chef
- Puppet
- Ansible
- CloudFormation

#### 部署策略
- 蓝绿部署
- Immutable Deployment

#### 自动化策略
- 依赖持续部署流水线
- 基础设施自动化
- 应用部署自动化

#### 伸缩策略
##### Scaling Cube
- X轴水平克隆
- Y轴功能性按需伸缩
- Z轴数据分离	

### 运维实践
#### 监控
##### 系统监控
- CPU
- 内存
- 磁盘

##### 应用监控
- 健康性
- 响应时间
- 关联ID(Correlation ID)
- 业务相关Metrics

##### 工具

###### SAAS		
  - NewRelic
  - OneAPM			

###### Hosted
  - Nagios
  - Zabbix
	

#### 告警
##### 告警方式
- 电话
- 短信
- 邮件
- 即时通信工具

##### 告警级别
  - OnCall
  - Backup
  - Owner
  - Leader

##### 工具
	- Splunk
	- Nagois
	- PagerDuty

#### 日志聚合
- 聚合每个服务实例的日志
- 关联相关日志

##### 工具
	- Splunk
	- ELK(ElasticSearch/LogStash/Kabana)
	- Fluent
	- Flume
