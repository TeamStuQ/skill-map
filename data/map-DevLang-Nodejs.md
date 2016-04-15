# Node.js 开发技能图谱

## Node.js 语言环境搭建

- Node.js 安装(3m大法：nvm、npm、nrm)
- Node.js 命令
- Node.js开发工具(推荐vscode)

## Node.js 语言编程要点

- 使用Node.js 4.x或5.x里的ES 6特性，如果想玩更高级的，可以使用[babel](babeljs.com)编译支持ES 7特性
- 合理使用[standard](https://github.com/feross/standard) 代码风格约定
- ES 6语法
- 需要大家重视OO（面向对象）写法的学习和使用

## 核心模块

- Buffer
- Child Processes
- Cluster
- Crypto
- DNS
- Domain
- Events
- File System
- HTTP
- HTTPS
- Net (TCP)
- OS
- Path
- Process
- Punycode
- Query Strings
- Readline
- Stream
- String Decoder
- TLS/SSL
- TTY
- UDP
- URL
- VM
- ZLIB

## Koa Web 编程

- koa 1.0 && 2.0 （koa2.0刚发布不久，喜欢折腾的可以考虑）
- mongoose（mongodb）
- bluebird（Promise/A+实现、Generator、Async）
- jade（视图层模板）
- ava（测试）
- vscode(调试)

### 了解http协议，尤其是表单和ajax传值，在req里如何接收

- 绝对地址和相对地址
- querystring
- url 和 uri
- http status code
- http verbs
- req取参数的3种方法
- 3种不同类型的post
- 命令行玩法
- supertest用法
- what is rest?

### 了解db相关操作，先以mongoose为主

- crud（增删改查）
- 了解分页
- 了解关系（1对1，1对多）在mongoose里如何实现
- 了解statics方法和methods的区别
- 了解pre和post的差别
- 了解mongoose的插件机制
- 了解mvc里m的作用，以及什么样的代码该放到模型里
- 了解索引优化
- 了解mongodb的部署

### 了解Generator、Async和Promise/A+规范，合理规避回调陷阱

- 了解的node的异步、generator和async(ES7)
- 了解异步的恶心
- 了解异步基本场景，比如waterfall这样的路程使用async如何处理
- 了解q和bluebird用法（如果有angularjs经验，推荐q，其他只推荐bluebird）
- 了解bluebird的promisifyAll用法
- 了解如何重构流程，以及代码的可读性

### 使用tdd/bdd测试，最小化问题

- 理解最小问题思想，培养程序员该有的强大的内心
- ava的基本用法
- 理解断言的用法（注内置断言，不需要assert/should/expect等）
- 理解测试生命周期
- 理解箭头函数、generator、promise等用法
- 理解如何模拟数据
- 理解http下的supertest测试
- 理解测试覆盖率
- 理解基于gulp自动化测试方法

### 你无论如何都要会的：调试

- node debug(太挫了，如果不是c，了解gdb、adb之类的人不推荐用)
- node-inspector(推荐4※)
- tdd/bdd(推荐5※)
- vscode编辑器(推荐5※)

## Node.js 应用

- 网站（如express/koa等）
- im即使聊天(socket.io)
- api（移动端，pc，h5）
- http proxy（淘宝首页）
- 前端构建工具(grunt/gulp/bower/webpack/fis3...)
- 写操作系统（NodeOS）
- 跨平台打包工具（nw.js、electron）
- 命令行工具（比如cordova）
- 编辑器（vscode）

## Node.js 实战案例

