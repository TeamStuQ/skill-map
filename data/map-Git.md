
# Git

## 分布式世界


### 1. 版本控制之道

- 版本库
    - 集中式（CVS、SVN）
    - 分布式（git）
- 工作目录树
    - 断面视图
    - 工作拷贝
    	- 1、初始化（init）.git目录
    	- 2、克隆（clone）
- 代码修改与文件同步
- 跟踪项目、目录和文件
- 使用标签跟踪里程碑
- 使用分支来跟踪并行演进
- 合并
- 锁机制

### 2. 安装与设置

- 安装
    - Linux
    - Mac：sudo port install git-core +svn +doc
    - Windows
        - Cygwin
        - MSys
- 设置 git config
    - 提   交  者：git config --global user.name "Jamsonwoo"
    - 邮件地址：git config --global user.email "Jamsonwoo@126.com"
    - 查看：git config --global --list
    - 颜色：git config --global color.ui "auto" （auto/always/false)(注：MSys建议用always)
- GUI
    - Tcl/TK：git gui(备注：工作目录树)
    - gitk --all(备注：工作目录树)
    - GitX (Mac)
- 内置帮助
    - git help <command>
    - git-doc

### 3. Hello Git

- 创建版本库：git int
- 修改代码
    - 1、添加索引：git add index.html
    - 2、提交记录：git commit -m "add in hello git HTML"  （备注：提交留言至少应该体现出进行本次修改的原因。先用一句简单的话来概括该提交；然后用几句话全面解释。）
    - 3、查看日志
        - git log <-1>（扩展：SHA-1哈希码）
        - git log --pretty=oneline
- 视图状态：git status （备注：存放代码）
	- 1、工作目录树  
	- 2、索引（暂存区）  
	- 3、版本库
- 分支
    - 1、创建分支：git branch 新分支名称 父分支名称  
        git branch RB_1.0 master
    - 2、提交修改：git commit -a（-a：提交全部修改过的文件）
    - 3、切换分支：git checkout 分支名称  
        git checkout RB_1.0
- 处理发布
    - 1、打标签：git tag 标签名称 打标签的点  
        git tag 1.0 RB_1.0
    - 2、变基命令：git rebase 分支名称（合并到主分支）  
        git rebase RB_1.0
    - 3、删除分支：git branch -d 分支名称  
        git branch -d RB_1.0
    - 4、创建归档：git archive --format=输出格式 --prefix=包内容 需要归档的标签名称 | gzip > 压缩结果重定向  
    	- git archive --format=tar --prefix=mysite-1.0/ 1.0 | gzip > mysite-1.0.tar.gz  
    	- git archive --format=zip --prefix=mysite-1.0/ 1.0 > mysite-1.0.zip
- 克隆远程版本库：git clone 远程版本库的位置 存放该版本库的本地目录  
    git clone git://github.com/tswicegood/mysit.git mysite-remote


## Git用法


### 1. 添加与提交

- 添加文件到暂存区
    - 1、启动交互命令提示符：git add -i
    - 2、直接进入补丁模式：git add -p
- 提交修改
    - 1、跟踪空目录：git不单独记录和跟踪目录，解决：在空目录里添加一个句点开头的空文件
    - 2、git commit 的提交留言编辑器 -v  
    	- 如果输入不带-m参数的git commit命令，Git将启动编辑器来编辑提交留言。为启动编辑器，Git会按照一下顺序查找编辑器的设置：
		- 1、环境变量 GIT_EDITOR 的值。
		- 2、Git 的设置 core.editor 的值。
		- 3、环境变量 VISUAL 的值。
		- 4、环境变量 EDITOR 的值。
		- 5、如果上述值均为空，Git 会尝试启动 vi 编辑器。        
- 提交三法  
    - 备注 a、提交暂存后的修改（先暂存后提交）  
    - 备注 b、提交工作目录树中的所有修改（把修改直接提交）  
    - 备注 c、提交工作目录树中执行的修改（把修改直接提交）
    - 1、添加到暂存区
        - 1、git add 文件
        - 2、git commit -m "留言"
    - 2、提交所有修改到版本库：git commit  -m "留言" -a
    - 3、指定提交文件（列表）：git commit -m "留言" 文件  
        Git别名:  
        git commit 简写为：git ci  
        git config --global alias.ci "commit"
- 查看修改内容
    - 1、查看当前状态：git status  
        Changes to be committed.    待提交变更   
        Changed but not updated.    未更新到索引的变更
    - 2、查看文件改动：git diff
        - a、git diff 无参 工作目录树 VS 暂存区
        - b、git diff --cached  暂存区 VS 版本库
        - b、git diff HEAD  工作目录树（暂存＋未暂存） VS 版本库
- 管理文件
    - 1、文件重命名与移动：git mv 原文件名称 新文件名称
    - 2、复制文件：无git cp命令，无需复制
    - 3、忽略文件：
        - a、版本级：文件加入.gitignore文件中，支持通配符*
        - b、本地级：.git/info/exclude

### 2. 分支

- 什么叫分支
    - 分支重命名：git branch -m   分支原名称   新名称  
        git branch -m master mymaster
    - 显示本地版本库所有本地分支名称：git branch
    - 创建分支：1、试验性更改  2、增加新功能  3、Bug修复
- 创建新分支
    - 创建分支：git branch   新分支名称  
        git branch newBranchName
    - 检出分支：git checkout 分支名称  
        git checkout newBranchName
    - 创建并检出：git checkout -b  新分支名称  新分支源分支  
        git checkout -b newBranchName2 master
- 合并分支
    - 合并(merge)方法
        - 1、直接合并：把两条分支上的历史轨迹合并，交汇到一起
        - 2、压合合并：一条分支上若干提交条目压合成一个提交条目，提交到另一条分支的末梢
        - 3、拣选合并：拣选另一条分支上的某个提交条目的改动带到当前分支上
    - 直接合并
        - git merge 分支名称  
            git checkout alternate  
            git add about.html  
            git commit -m "add about page"  
            git checkout master  
            git merge alternate
    - 压合合并
        - git merge --squash 分支名称  
            git checkout -b contact master  
            git add contact.html  
            git commit -m "add contact file"  
            git commit -m "add contact file 2" -a  
            git checkout master  
            git merge --squash contact  
            git status  
            git commit -m "add contact page" -m "has primary and secondary email"
    - 拣选合并
        - git cherry-pick 提交名称  
            git checkout contact  
            git commit -m "add contact 3" -a  
            [contact 6dbaf82]......  
            git checkout master  
            git cherry-pick 6dbaf82  /  git cherry-pick -n 6dbaf82
- 冲突处理
    - git merge  
        git checkout -b about master  
        编辑about.html  
        git add about.html  
        git commit -m "add about.html "  
        git branch about2 about  
        编辑about.html  
        git commit -m "add about.html 1" -a  
        git checkout about2  
        编辑about.html  
        git commit -m "add about.html 2" -a  
        git checkout about      
        git merge about2     
        git mergetool    
        git commit
    - 处理冲突软件（kdiff3）：git config --global merge.tool kdiff3
    - git mergetool
- 删除分支
    - git branch -d 分支名称  （成功合并到当前分支时）  
        git branch -d about2
    - git branch -D 分支名称 （强制删除）
- 分支重命名
    - git branch -m 原分支名称  新分支名称 （不允许重名）  
        git branch -m contact abc
    - git branch -M 原分支名称  新分支名称 （强制覆盖）  
        git branch -m master contact

### 3. 查询历史记录

- 查看日志
    - git log
        - j 向下浏览；k 向上浏览；q 退出
        - 提交名称、提交人、提交日期、提交留言
    - git log -p （显示版本之间的代码差异）
    - git log -1（数字表示提交日志条数）
    - git log 7b1558c （指定提交名称缩写[前7位]）
- 指定查找范围
    - git log --since/before="英文格式日期"
        - git log --since="5 hours" （最近5小时内）
        - git log --before="2012-8.20" -1 （20120820之前的最后一条）
    - git log 最老版本..最新版本
        - git log 18f822e..0bb3dfb
        - 注：日志结果不包括最老，包括最新
        - git log 18f822e..HEAD  /  git log 18f822e..
    - git log 标签名称
        - git log --pretty=format:"%h %s" 1.0..HEAD
        - git log --pretty=oneline 1.0..HEAD
    - \^：回溯一个版本
        - git log 18f822e^^
        - 注：1、windows系统下，^需要添加双引号 git log “18f822e^^”。
        - 注：2、当遇到某个节点（通常是版本合并后的节点）有并列的多个父节点时，“^1”代表第一个父节点，“^2”代表第二个，以此类推。而“^”是“^1”的简写。
    - *~N：回溯N个版本
        - git log -1 HEAD^^^  /  git log -1 HEAD^~2  /  git log -1 HEAD~1^  /  git log -1 HEAD~3
        - git log -1 HEAD~10..HEAD
- 查看版本间差异
    - git diff 版本名称（与当前工作目录树的差异）
        - git diff 18f822e
    - git diff --stat 1.0（数据统计）
- 查明提交者
    - git blame 文件名（特定代码块历史）
        - git blame hello.html
        - 注：1、格式：提交名称  初始文件名（提交人   提交时间  行号）   代码行
        - 注：2、^脱字号开头表示版本库中第一个递交
    - git blame -L <开始>,<结束> 文件名（特定代码行历史）
        - git blame -L 12,13 hello.html
        - git blame -L 12,+2 hello.html
        - git blame -L 12,-2 hello.html
    - git blame -L 正则表达式 文件名（特定代码行历史）
        - git blame -L "/<\/body>/",+2 hello.html
        - >git blame -L "/<\/body>/",-2 "4333289e^" -- index.html
- 跟踪内容
    - 检查在同一个文件内移动或复制的代码行：git blame -M 文件名
    - 查看文件之间的复制：git blame -C -C 文件名
    - 查看显示代码的具体变动的历史记录：git log -C -C -1 -p
- 撤销修改
    - 增补提交：git commit -C HEAD -a --amend
        - --amend：增补提交
        - -C：复用指定提交的提交留言
        - -c：打开编辑器，在已有提交留言基础上修改
    - 反转提交：git revert -n 提交名称
        - 参数：--no-edit
    - 复位：git reset 提交名称
        - 提交名称默认值：HEAD
        - 提交名称可用^和~修饰符
        - 参数--soft：暂存所有因复位带来的差异，但不提交它
        - 参数--hard：慎用，从版本库和工作目录树中同时删除提交
- 重新改写历史记录
    - 重新排序提交：git rebase -i HEAD~3
    - 将多个提交压合成一个提交：git rebase -i 0bb3dfb^
    - 将一个提交分解成多个提交：git rebase --continue

### 4. 与远程版本库协作

- 网络协议
    - SSH：用户名@服务器名/版本库路径  
        git@github.com/tswicegood/mysite-chp6.git
    - git：协议://服务器名/版本库路径  （使用9418端口、匿名、无须加密、只读）  
        git://github.com/tswicegood/mysite-chp6.git
    - HTTP/HTTPS：需架设WebDAV服务
    - 最快：git
    - 安全：SSH
    - 不受防火墙限制：HTTP(S)
- 克隆远程版本库：git clone git://github.com/tswicegood/mysite-chp6.git
- 版本库同步
    - 取来（fetch）：git fetch
    - 查看远程分支：git branch -r
    - 取来合并：git pull 远程版本库名称 须要拖入的远程分支名
    - 远程分支名前缀origin/表示远程版本库上的分支名称，origin是默认远程版本库别名
- 推入改动
    - 推入默认版本库origin：git push
    - 查看推入哪些提交：git push --dry-run
    - 推入指定版本库：git push <repository> <refspec>  
        git push origin mybranch:master
- 添加新的远程版本库
    - 一次拖入：git pull git://ourcompany.com/dev-erin.git
    - 使用别名：git remote add 别名 路径
    - 查看远程版本库详细信息：git remote show <name>
    - 删除别名：git remote rm

### 5. 管理本地版本库

- 使用标签标记里程碑
    - 标签只读、标签名不能包含空格
    - 查看已存在标签：git tag
    - 新建标签：git tag 标签名
    - git tag 标签名 提示名称/分支名称
- 发布分支的处理
    - 发布分支通常以RB_为前缀并包含版本号，RB_1.3
    - git branch RB_1.0.1 1.0
- 标签与分支的有效名称
    - 不能以“/”结尾
    - 不能以“.”开头
    - 不能使用特殊字符：空格~^:?*[控制符删除键
    - 不能出现“..”
- 记录和跟踪多个项目
    - 多个项目共享一个版本库
    - 多项目多版本库
- 使用Git子模块跟踪外部版本库
    - 添加新子模块
        - 查看该版本库的子模块：git submodule
        - 添加新子模块：git submodule add 源版本库 存储路径  
            git submodule add  git://github.com/tswicegood/hocus.git  hocus
        - 初始化子模块：git submodule init hocus
    - 克隆含子模块的版本库：git submodule update 子模块名  
        cd work  
        git clone magic new-magic  
        cd new-magic  
          
        git submodule   
        git submodule init hocus  
        git submodule update hocus
    - 改变子模块的版本
    - 使用子模块时要提防的错误
        - git add 确保结尾没有“\”
        - submodule update 先检查提交
        - 添加新内容到本地自模块版本库，要检出正确分支
        - 修改提交，确保改动被送回远程版本库

### 6. 高级功能

- 压缩版本库
    - git gc  整理版本库、优化Git内部存储历史记录
    - git gc <--aggressive>  重新计算增量存储单元
- 到处版本库
    - 创建版本快照:git archive 格式类型 指定版本
    - git archive --format=<tar/zip> <--prefix=父目录> 转换格式  
        git archive --format=zip --prefix=mysite-release/ HEAD > mysite-release.zip     
        git archive --format=tar --prefix=mysite-release/ HEAD | gzip > mysite-release.tar.gz
- 分支变基
    - git rebase --continue/--skip/--abort
    - git rebase --onto master contacts search
- 重现隐藏的历史：git reflog
- 二分查找
    - git bisect start
    - git bisect bad
    - git bisect good 1.0
    - git bisect reset
    - git bisect visualize
    - git bisect log
    - git bisect replay <文件>
    - git bisect run




