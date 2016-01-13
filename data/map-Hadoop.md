----
# Hadoop 家族技能图谱
- Hadoop
- Zookeeper
- Avro
- Chukwa
- Ambari
- Whirr
- Bigtop
- HCatalog
- Hue
- HBase
- Pig
- Sqoop
- Cassandra
- Hama
- Flume
- Giraph
- Oozie
- Crunch
- Hive
- Mahout

----

## Hive 技能图谱
### Hive介绍
### Hive系统架构
- MetaStore
   - Derby
   - MySQL
- HDFS
   - /user/hive/warehouse
- MapReduce

### Hive配置文件
- hive-env.sh
- hive-site.xml
- hive-log4j.properties

### Hive命令行

- hive-config
- hive shell
   - quit,exit
   - reset
   - set
   - add,list,delete FILES
   - ! <命令>
   - dfs <命令>
   - HQL
   - source FILES
- hive service
   - hive-service cli
   - hive-service hiveserver
   - hive-service metastore
   - hive-service hwi
   - hive-service jar

### HiveQL

- 语法关键字
   - show databases
   - show PARTITIONS
   - show tables
   - create table
   - load data(local) inpath
   - Select*from
   - desc,alert,drop
   - limit,as,case when then,union
   - like,group by,having
   - order by,sort by
   - cluster by

- 数据类型
   - 简单类型
      - tinyint,smallint,int,bigint
      - float,double
      - boolean
      - string
      - timestamp
      - binary

    - 复杂类型
        - arry
        - map
        - struct

- 表
   - 内部表
   - 外部表
      - HDFS
      - HBase
      - Cassandra
      - DynamoDB

- 表查询
   - 单表查询
   - lnner joins
   - Outer joins
   - Semi joins
   - Map joins
   - 子查询
   - 视图

### 数据表设计
- 每日一表
- 每日一表分区
- 按桶分散数据

### Hive优化
- 表分区Partitions
- 表存储桶buckets
- 表压缩
- 索引
   - bitmap indexes
- 执行计划
- 控制Mapper.Reduce数量

### 访问方式
- Hive Shell
- Java JDBC API
- Thrift Client
- RHive

### 自定义函数
- 自定义函数UDF
- 自定义聚合函数UADF

### Hive安全
- 认证
   - hive.files.umask.value
   - hive.metastore.authorization.storage.checks
   - hive.metastore.execute.setugi

- 授权
   - hive.security.authorization.enabled
   - hive.security.authorization.createtable.owner.grants
   - hive.security.authorization.createtable.user.grants
	
- 权限模型
   - User
   - Group
   - Role

### Web控制台
- hwi:9999

### 软件集成
- Zookeeper
- Thrift
- Ooize
- HCatalog
- AWS

### Hive案例

----

## Mahout 技能图谱
### Mahou介绍

### 推荐
- 协同过滤
   - 基于用户协同过滤
   - 基于物品协同过滤

- 相似度矩阵
   - 欧氏距离
   - Pearson距离
   - 余弦距离cosine
   - Spearman’s rank correlation coefficient
   - Tanimoto coefficient
   - log-likelihood

- 近邻算法
   - 按值取近邻
   - 按比例取近邻

- 推荐算法
   - UserBasedRecommender
   - ItemBasedRecommender
   - SlopeOneRecommender
   - SVDRecommender
   - KnnltemBasedRecommender
   - TreeClusteringRecommender

- 算法检验
   - 全查率Recall
   - 准查率Precision

- 数据模型
   - UserID,ltemID,PreferenceValue
   - UserID,ItemID

- Hadoop集群部署

### 聚类
- 数据模型
   - DenseVector
   - RandomAccessSparseVector
   - SequentialAccessSpareVector

- 距离算法
   - 欧式距离
   - 欧式平方距离
   - 马氏距离
   - 余弦距离
   - Tanimoto距离
   - 带权重距离

- 标准化距离
   - normalization

- 聚类算法
   - k-means
   - Canopy
   - Fuzzy k-means
   - Dirichlet
   - Topic moseling on LDA

- Hadoop集群部署

### 分类
- 系统模块
   - 训练营
   - 测试营
   - 分类算法
   - 训练过程
   - 建立分类器
   - 验证模块
   - 真实数据
   - 调整参数
   - 执行分类过程
   - 预测结果
   - 检验结果
   - 自动构建

- 工作流
   - 训练模型
      - 定义目标变量
      - 历史数据
      - 定义预测变量
      - 分类算法
      - 通过学习算法训练分类器
   - 验证模型
      - 运行测试集
      - 参数调优
   - 生产环境
      - 启动模型对真实数据计算
   - 分类模型
   - 分类算法
      - Stochastic gradient descent(SGD)
         * Online_ogisticRession
         * CrossFoldLearner
         * Adaptivel_ogisticRegression
      - Support vector machine(SVM)
      - Naive Bayes
      - Complemetary naive Bayes
      - Random forests





