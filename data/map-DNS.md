# DNS 排查技术图谱
---
## DNS 在哪

### 获得主机的地址
#### *gethostby name*
##### hodtname来源 
- 自己的Hostname
- NIS
- SMB
- NetBIOS
- DNS
- ...

##### addr
- IPv6(默认优先）
- IPv4
- ...

### 查询
### *NIX环境
#### /etc/nsswitch.conf
##### files
- /ect/host.conf
##### [wins][nis][nisplus]...
##### dns
- /ect/resolv.conf
#### /ect/host.conf（旧）
##### hosts
- /ect/host.conf
##### [nis]
##### bind
- /ect/resolv.conf
#### 一般优先级选择
##### 本机
- hosts file
##### 内部
- wins
- nis
##### 外部
###### resolver
- 主DNS
- 辅DNS
- ...

### Windows环境
#### 一般顺序
- #Checks it's own name.
- Local hostname cache
- Hosts file
- DNS
- NetBIOS name cache
- [WINS]
- 开启wins
- 关闭wins
- Broadcast
- LMHOSTS
#### 参考
-  https://technet.microsoft.com/zh-cn/library/bb457118.aspx

----

## 本机 DNS 一般特征
### 配置
#### 自动
##### DHCP
- PPPOE
- VPN
- 无线路由

#### 手动

### 角色
- 首选DNS
- 备用DNS
- ...

### 附加域名后缀？
- 不附加

##### FQDN
- 附加

##### 默认.local
- 强制不附加后缀

##### 主机名后添加单个“.”结尾

----

## 完整域名
### files dns nis+ hesiod db compat ld ap xins

