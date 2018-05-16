## 版本管理
1. 什么是版本管理
2. 为什么要学习版本管理
3. 版本管理的工具（软件）
    * cvs， svn， git
    * svn集中式
    * git分布式
4. git的初体验
5. 怎么使用git来做版本管理
    1. 所有的版本管理的操作， 都在执行 git 命令
    2. git命令在哪执行呢？bash里面（安装完git这后，右键点击gitbashhere之后出来的一个命令行工具）
    3. 常用的bash命令
        1. cd 进入到某个目录
        2. touch 创建文件
        3. ls 查看文件列表z
        4. cat 查看文件内容
6. git本地版本管理
    1. git init： 创建一个版本库, 它会生成一个 .git的隐藏目录. 所有的项目文件和文件夹应该放在和.git同级的目录下

    2. 配置用户名和邮箱
        git config --global user.email "tuzeyu@itcast.cn"
        git config --global user.name "tuezeyu"

    3. 修改文件（创建文件， 删除文件， 重命名文件， 修改代码。 总之，只要是工作区中发生了变化， git都可以监测到）

    4. 提交
        1. git status: 检查版本管理的状态
        2. git add . 把修改提交到暂存区
        3. git commit -m "备注" 把文件从暂存区，提交到存储区

    5. 查看版本记录
        1. git log 如果类容比较长，会有一个冒号。点q退回到命令行
        2. git reflog （简单版本）
        3. git reset --hard a800ab1 代码的回滚

7. 远程版本管理
    1. 需要在代码托管网站上创建一个版本库， 就会生成一个版本库的地址
    2. 在本地创建一个文件夹， 在文件夹内部 git clone https://gitee.com/teachertu/class17.git, 本地就会有一个和服务器一样的版本库
    3. 就可以在本地做版本管理了（add commit）, 本地提交完成之后，需要再向服务器提交。
    4. 先执行 pull
    4. 再往服务器提交 git push

    add commit pull push

8. 分支管理
    1. 一开始的时候，我们创建的版本库，默认有一个主分支 （master）
    2. 怎么查看当前版本库的分支 git branch, 当前所在的分支会被高亮显示
    3. git checkout -b develop 创建并切换到新分支
    4. 只是分支和分支之间进行切换 git checkout master
    5. 分支和分支之间，是相互独立，不受影响的
    6. 如果想把分支a的代码合并到分支b
        1. 切换到分支b
        2. 执行 git merge a

9. 分支的远程操作
    1. 在码云上， 创建一个develop分支
    2. 在本地克隆代码，默认在（master）分支上， 我们需要先切换到 develop分支
    3. git checkout -b develop 在本地创建一个develop分支
    4. 修改文件本地提交， add commit
    5. git pull,可能会报一个错误 git branch --set-upstream-to=origin/(远程分支名) develop（本地分支名）
        解释： 就是让我们刚才在本地创建的这个分支和远程的分支一一对应起来
        最终要执行的命令就是： git branch --set-upstream-to=origin/develop develop
    6. 正常执行 git pull, 和 git push

10. 分支的总结
    1. 分支和分支之间相互独立不受影响
    2. 分支和分支之间可以相互合并
        * git branch : 查看分支
        * git checkout -b dev 创建分支
        * git checkout master 切换分支
        * git merge dev 合并分支

11. 创建SSH Key：`ssh-keygen -t rsa`
    - 2 在文件路径 `C:\用户\当前用户名\` 找到 `.ssh` 文件夹
    - 3 文件夹中有两个文件：
    - 私钥：`id_rsa`
    - 公钥：`id_rsa.pub`
    - 4 在 `github -> settings -> SSH and GPG keys`页面中，新创建SSH key
    - 5 粘贴 公钥 `id_rsa.pub` 内容到对应文本框中
    - 5 在github中新建仓库或者使用现在仓库，拿到`git@github.com:用户名/仓库名.git`
    - 6 此后，再次SSH方式与github“通信”，不用输入密码确认身份了

12. 在github创建一个博客
    1. 创建一个版本库 你的名字.github.io
    2. 下面不勾东西，创建一个空库
    3. 在本地初始化一个版本库， 加入你的要上传的博客的内容， add commit
    4. push 你的博客的版本库的地址 $ git push https://github.com/tuzeyu/tuzeyu.github.io.git
    5. 它会要求我们， 将我们自己创建的版本库和远程的版库做一个连接（对应）
        - git push --set-upstream https://github.com/tuzeyu/tuzeyu.github.io.git master
    6. 我们就拥有了一个高大上的github的博客

13. 重点： 
    1. 本地版本管理
    2. 远程版本管理
    3. 协同开发
    4. 分支的操作


    


