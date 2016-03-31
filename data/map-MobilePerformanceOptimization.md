# 移动优化技能图谱

## 网络加载
### 优化请求
- 优化请求包大小
  * 代码压缩
  * Gzip压缩
  * 不同网络（2G/3G/4G/wifi）图片尺寸
  * 合理减少Header字段/cookie
  * MTU策略(1500字节)
  * 首屏加载时间控制
  + 3s完成（5s为用户最大容忍度）
  + 网络平均速度(2.71Mb/s = 0.33875MBps(1Mbps=8MBps) = 346.88KBps)
  + 不超过1041KB，经验值200K（考虑打开响应、网络连接至少600ms）
- 减少请求次数
  * 合并js、css文件、雪碧图
  + 移动端雪碧图(构建)
  + combo
  * 避免重定向(一次重定向至少600ms)
  * 避免重复资源请求
  * 同时并行请求数量（android：4个，ios 5以后可支持6个）
- 解耦请求依赖
  * 文件并行加载/依赖执行(构建+模块化)
  * 首屏CGI提前(组件)
  * inline首页必备js/css
  * 异步加载非首屏 
- 连接优化
  * 支持keep-alive
  * 网络时间
	  + DNS(2G：3.85785；3G：1.60643；WIFI：0.986921；unknown：1.67838)
	  + TCP(2G：2.33482；3G：0.743109；WIFI：0.550208；unknown：1.20898)
	  + RTT(2G：2.57478；3G：0.608047；WIFI：0.444332；unknown：1.30601)
	  + Tran(2G：14.0374；3G：60.1967；WIFI：70.8728；unknown：36.3655)
  * DNS Prefetch
  * SPDY/http2.0 支持

### 缓存策略
- Cache
  * Browser Cache(一年)
  * AppCache(选择)
  * 离线包(native下必须)
- Web Storage
  * localStorage
  * sessionStorage
  * nativeStorage（native，>=4.6，大数据）
- Cookie
- Web DB
  * indexedDB(推荐)
  * Web SQL
- 合理缓存CGI数据(local/ajax)

### 加载策略
- 首屏加载
- 按需加载(模块化)
- lazyload(图片、组件)
  * 延迟加载图片
  * 滚动加载图片
- Media Query

## 监控上报 
- 测速(2G/3G/4G/wifi、组件)
  * 首屏展示速度
  * CGI测速
  * CDN文件测速
  * 图片测速
-  成功/失败率
  * 图片
  * CDN文件
-  错误日志
  * badjs
  * tryjs
-  performance
  * timing(ios暂不支持)
  * resouce timing(缓存/非缓存，手机暂不支持)
## SEO
-  keywords/description
-  合理减少pages数量
-  减少图片/flash/弹窗
-  外链权重不高
-  canonical/alternate

## 渲染优化
- HTML
	* HTML meta viewport(可以加速页面渲染)
	* 优化DOM tree
	   + 减少html标签，避免不必要的嵌套
		+ 避免table
		+ 减少DOM深度
- 动画
	* 合理使用requestAnimationFrame
	* 尽量使用css3
	* 合理使用Canvas代替多DOM tree(5个) css3
	* 高频事件(touchmove、scroll) lazy化(debounce.js)
	* GUP渲染
	  + 大量的渲染(Canvas、WebGL、Video)
	  + 3D Transformed(transitions、3D transforms)
	  + Animated css属性（filters, masks, blend modes, reflections, opacity）
	  + position: fixed
	  + content overlapping existing GPU-rendered bitmaps
- repaint/reflow
	* 避免重新设置图片大小
	* 避免频繁的触发repaint/reflow

## 文件优化
- css样式
    * 避免style标签
    * 去掉expression
    * 移除空的（多余的）选择器
    * 合理使用Float
    * 合理使用iconfont
    * 值为0的属性不带单位（兼容性、压缩自动处理）
    * 标准化浏览器前缀(构建)
    * 减少font-size的申明（增加浏览器渲染计算）
    * 异步css文件换成js文件(构建)
- js脚本
    * 框架组件选择(zepto)
    * 使用documentFragment(zepto已解决)
    * 事件优化
       +   事件代理
       +   频繁事件优化
       +   touchsatrt、touchend(tap)代替click
    * 使用mqqapi(http://mqq.oa.com/)【公司内】
    * id选择器
    * 合理缓存对象（DOM、js对象、length）
    * 慎用with
    * 避免eval、Function
    * 使用Join
- 图片文件
	* 图片大小
	  +   优图（tu.oa.com）
	  +   智图（zhitu.tencent.com）
	  +   grunt插件
	* 减少图片使用
	  +   css画图
	  +   svg画图
	  +   合理iconfont代替图片(最后的选择)
	  +   避免使用bmp图片
	* srcset + sizes(兼容性）
	* 图片格式(webp > jpg > png(png8 > png24) > gif)
	* 图片大小限制(10K，不超过30K)
	* 图片尺寸限制

