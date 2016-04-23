# Ruby 技能图谱

说明： 本图谱只捡重点的列举，并非包含全部。文中所列举或没有列举的资源信息都可以在[awesome-ruby](https://github.com/markets/awesome-ruby)中找到。

## Ruby应用生态

* [Web开发](#Web开发)
* [自动化测试](#自动化测试)
* [安全](#安全)
* [云计算基础](#云计算基础)
* [嵌入式](#嵌入式)

### Web开发

- Rails全栈式Web框架
- 轻量级Web开发框架（Sinatra，Cuba等）
- 异步无阻塞Ruby Server框架：Goliath

### 自动化测试

- RSpec： BDD测试框架
- Cucumber: BDD验收测试框架
- Watir: Web应用测试工具


### 安全

- Metasploit：也许是最好的渗透测试框架
- Gitrob: Github敏感信息收集工具

### 云计算基础

- chef:   自动化运维工具
- puppet: 自动化运维工具
- fog: 强大的云服务库

### 嵌入式

- mruby:  Ruby的轻量版本，为嵌入式开发而生
- [mruby-cli](https://github.com/hone/mruby-cli): 为linux等平台构建本地命令行应用

## Web开发需要学习的主力框架

- Rails: 全栈Web开发框架
- Sinatra: 轻量级的Web开发框架
- Goliath: 异步非阻塞Ruby Server框架

## 彻底掌握Ruby所需要的「道」与「术」

### 「道」

- 面向对象基础
- 深入理解Ruby背后的设计哲学和设计原则
- 深入理解Ruby对象模型
- 深入理解block和闭包
- 深入理解Ruby的作用域
- 深入理解Ruby的方法查找机制
- 深入理解Ruby的内存管理（变量和对象内存布局，GC算法和工作机制）
- 进阶：有余力的可以研究Ruby底层的实现
- 进阶：通过学习lisp（Elixir亦可），来反观Ruby中block（函数式编程风格），以及元编程的实现（Lisp是暴露AST的宏，Ruby是利用Block和作用域隐式操作AST的宏）


### 「术」

- 各种具体类型的处理方法和方式，比如字符串和相关编码、正则表达式、IO等处理
- 并发与并行：
  - 彻底了解Ruby的GIL及其机制
  - 彻底了解Ruby线程的发展变化及其工作机制（从用户线程到本地线程）
  - 彻底了解Fiber及其应用（重点在Goliath中的应用，终结异步回调地狱）
  - 彻底了解进程相关（重点在各种Ruby多进程应用服务器的工作机制）
  - 尝试了解基于actor模型的Ruby并发库Celluloid。
- 社区中各种Gem的实现原理及其用法

## 学习资源


- [「诱人的Ruby」视频教程](http://edu.51cto.com/lecturer/index/user_id-140924.html)
- [Ruby Weekly订阅](http://rubyweekly.com/)
- 其他请自行Google: Ruby books
