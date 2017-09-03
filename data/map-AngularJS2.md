# Angular 2 技能图谱

## 模块

### 自定义模块

- 根模块

- 特性模块

- 共享模块

- 核心模块

### 内置模块

- ApplicationModule 模块

- CommonModule 模块

- BrowserModule 模块

- FormsModule 模块

- ReactiveFormsModule 模块

- RouterModule 模块

- HttpModule 模块

### 元数据

- providers

- declarations

- imports

- exports

- bootstrap

- id

- schemas

- entryComponents

## 指令

### 组件

### 结构指令

- 改变 DOM 树的结构，如 NgIf

### 属性指令

- 改变元素的外观和行为，如 NgStyle

### 生命周期钩子

- OnInit

- OnChanges

- DoCheck

- OnDestroy

### 内置指令

- 通用指令

    * NgClass
    
    * NgStyle
    
    * NgIf
    
    * NgSwitch
    
    * NgFor
    
    * NgTemplateOutLet
    
    * NgPlural

- 表单指令

    * FormsModule 模块

        + NgForm
        
        + NgModelGroup
        
        + NgModel
        
        + InternalFormsSharedModule 模块

    * ReactiveFormsModule 模块
    
        + FormControlDirective
        
        + FormGroupDirective
        
        + FormControlName
        
        + FormGroupName
        
        + FormArrayName
        
        + InternalFormsSharedModule 模块

    * InternalFormsSharedModule 模块

        + 表单元素访问器指令
        
        + 表单选择框选项指令
        
        + 表单验证指令
        
        + 控件状态指令

- 路由指令

    * RouterLink

        + RouterLinkWithHref（a[routerLink]）

        + RouterLink（:not(a)[routerLink]）

    * RouterLinkActive

    * RouterOutlet

### 自定义指令

## 组件

### 元数据

- selector

- moduleId

- inputs

- outputs

- host

- exportAs

- providers

- viewProviders

- changeDetection

- queries

- entryComponents

- templateUrl

- template

- encapsulation

- styles

- styleUrls

- animations

- interpolation

### 生命周期钩子

- OnChanges

- OnInit

- DoCheck

- AfterContentInit

- AfterContentChecked

- AfterViewInit

- AfterViewChecked

- OnDestroy

### 模板

## 模板

### 表达式操作符

- 管道（|）

    * 内置管道
    
    * 自定义管道
    
    * 纯管道
    
    * 非纯管道

- 安全导航（?.）

### 数据绑定

- 属性绑定 - []

    * 插值 - {{}}
    
    * Property 绑定
    
    * Attribute、 class 与 style 绑定

- 事件绑定 - ()

- 双向绑定 - [()]

### 表单

- 模板局部变量（# 或 ref-）

- 表单校验

* 内置校验器

* 自定义检验器

- 表单状态

- 表单指令

### 内置元素标签

- \<ng-container>

- \<ng-content>

## 路由

### 路由指令

### 路由策略

- PathLocationStrategy

- HashLocationStrategy

- PreloadingStrategy

    * PreloadAllModules
    
    * NoPreloading（默认）
    
    * 自定义预加载策略

### 路由拦截

- CanActivate（激活拦截）

- CanActivateChild（激活子路由配置项）

- CanDeactivate（反激活拦截）

- CanLoad（模块加载拦截）

- Resolve（数据预加载拦截）

### 路由跳转

- 指令跳转

    * RouterLink

- 代码跳转

    * navigateByUrl()

    * navigate()

### 路由状态

- ActivatedRouteSnapshot

- RouterStateSnapshot

## 依赖注入

### 注入器（树）

### Provider

- 类 Provider（useClass）

- 值 Provider（useValue）

- 别名 Provider （useExisting）

- 工厂 Provider（useFactory）

### forwardRef()

### 可选依赖 - @Optional

## 服务

### 内置服务

- JsonpModule 模块

    * Jsonp
    
    * BrowserJsonp
    
    * RequestOptions
    
    * ResponseOptions
    
    * JSONPBackend

- HttpModule 模块

    * HTTP
    
    * BrowserXhr
    
    * XHRBackend
    
    * XSRFStrategy
    
    * RequestOptions
    
    * ResponseOptions

### 自定义服务

## RxJS

### Observable

### Observer

### Subscription

### Subject

### operators

- 创建操作符

- 转化操作符

- 过滤操作符

- 组合操作符

- 错误处理操作符

- 工具操作符

- 条件操作符

### Scheduler

## 装饰器

### 类装饰器

- @Component

- @Directive

- @Pipe

- @Injectable

- @NgModule

### 属性装饰器

- @Input

- @Output

- @HostBinding

- @HostListener

- @ContentChild

- @ContentChildren

- @ViewChild

- @ViewChildren

### 参数装饰器

- @Inject

- @Optional

- @Self

- @SkipSelf

- @Host

- @Attribute

## 动画

- AnimationKeyframe

- AnimationPlayer

- AnimationSequencePlayer

- AnimationGroupPlayer

- AnimationQueue

- AnimationTransition

- AnimationTransitionEvent

## 变化检测

### Zone.js

- ngZone

    * onUnstable
    
    * onMicrotaskEmpty

    * onStable

    * onError

### 异步操作

- 用户事件：Click/Change...

- 通信：XHR/WebSocket

- 定时任务：setTimeout/requestAnimationFrame

### ChangeDetectorRef

## 测试

### 单元测试

- Jasmine 测试框架

- Karma 管理工具

### 端到端测试

- Protractor

- Benchpress

###  内置工具集

- TestBed

- inject

- ComponentFixture

- fakeAsync

- flushMicrotasks

- tick

- discardPeriodicTasks

## 升级

- UpgradeAdapter

- UpgradeAdapterRef

## 模板编译器

- 动态 - JIT

- 静态 - AoT

    + ngc

## 调试

- Augury

- 断点调试

## 质量检查工具

-  TSLint

- Codelyzer

## 构建工具

- webpack

- Gulp

- RollUp

- System.js

## 编码工具

- VS Code 

- WebStorm

- Atom

- Sublime Text 

- Vim

## 开发语言

- TypeScript

- ES6 / ES5

- Dart

## 周边生态圈

- Angular Material 2

- Universal

- Angular-CLI

- Ionic 2

- NativeScript

- Angular Mobile Toolkit

- AngularFire 2

- Angular Electron


