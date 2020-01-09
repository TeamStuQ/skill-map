# Kubernetes 技能图谱

## Container basics （容器技术基础）
* Linux Operating System Basic
* Linux Process Management (Linux进程管理)
* Cgroups
* Linux Namespaces
* Rootfs & Container Image
* Image Registry

## Kubernetes architecture （Kubernetes 架构）

### Node
#### Kubelet
- Runtime （容器运行时）
   * CRI (Container Runtime Interface)
   * Runtime shims （容器运行时插件）
       + Cri-containerd （containerd）
       + Dockershim （Docker）
       + Cri-o （runC）
       + Rktlet （rkt）
       + Frakti （KataContainers）
   * RuntimeClass (新特性：容器运行时类)
- Networking
    * CNI (Container Network Interface)
    * Linux Network Namespace
    * Network plugins （网络插件）
        + Flannel
        + Calico
        + OVS
        + SR-IOV
        + macvlan/ipvlan
        + Opencontrail
        + Weave
        + Cilium （新插件，支持BPF，推荐）
- Storage
    * CSI  (Container Storage Interface)
    * Persistent Volume & Persistent Volume Claim
    * Volume plugins （存储插件，仅负责提供PV）
        + NFS
        + Cinder
        + GlusterFS
        + Ceph
        + Local path
    * Volume extenstion (存储扩展，负责提供完整的Storage方案)
        + Rook.io
- Kube-proxy
    * Iptables 转发链与随机模式
    * IPVS 负载均衡

### Master
- API server
    * Watch & Informer （Watch 和通知框架） 
    * Admission Plugin（权限控制插件）
    * RBAC plugin （基于角色的访问控制插件）
    * Custom Resource Definition (新特性，CRD，自定义API对象，重点推荐)
    * APIServer aggregator (新特性，聚合APIServer，推荐)
- Controller manager
    * Reconcile （控制循环与状态协调机制）
- Scheduler
    * Scheduling algorithm （默认调度算法）
    * Scheduler extender （调度器扩展器）
    * Custom algorithm （自定义调度算法）
    * Custom scheduler （自定义调度器）
    * Scheduler Framework （新特性，可扩展调度框架，推荐）
    * Multiple scheduler （多调度器）
- Etcd
    * Etcd operator
    * Etcd performance tuning

## Kubernetes workloads （Kubernetes 作业管理）
- Pod
- ReplicaSet （容器副本）
- Deployment （常规作业发布）
    * Rolling update （自动的滚动更新）
    * Pause/resume （可控的更新流程）
    * Canary deploy （金丝雀发布）
    * Rollback （版本回滚）
- DaemonSet （Daemon 作业）
- StatefulSet （有状态任务）
    * Topology State
    * Storage State
- Job （一次性任务）
- CronJob （定时任务）

## Kubernetes applications management （Kubernetes 应用配置）
- Service （服务发现）
    * Publish service（对外暴露 Service）
    * Nginx/HAproxy service（自定义 Service）
    * External Load Balancer
- ConfigMap （应用配置管理）
- Ingress （7层服务发现）
- Secret （加密信息管理）
- Headless Service（DNS 服务发现）
- External Load Balancer

## Kubernetes operations （Kubernetes 安装与运维）
- Installation
    * Kubeadm （内置部署工具，推荐）
    * Minikube （本地部署工具）
    * Kops （云端部署工具）
- Maintenances
    * Garbage Collection (垃圾回收)
        + Container GC
        + Image GC
- Upgrades 
- Troubleshooting
    * etcd admin
        + Key-value CRUD（键值对操作）
        + Metrics monitoring （Metrics 监控）
        + Cluster design（集群规划）
        + Disaster Recovery （灾难恢复，backup 和 restore）
    * Iptables rules

## Kubernetes extensions/add-ons （Kubernetes 扩展和插件）
- Custom Resources Definition （自定义 Kubernetes API 对象）
    * Customized controller （自定义 API 对象控制器）
    * Workqueue （自定义 API 对象任务队列）
- Kube-dns
    * SkyDNS
    * CoreDNS
- Fluentd （日志收集）
    * Fluent-bit 
- Heapster (容器集群监控）
- Istio（微服务治理和负载均衡）
- Federation v2（新特性：集群联邦v2）
- Helm (kubernetes application package)

## Kubernetes CI/CD
- Spinnaker
- Skaffold (新项目，推荐)

## Kubernetes PaaS
- OpenShift
- Knative （新项目，推荐）
