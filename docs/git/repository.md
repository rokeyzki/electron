# 仓库 Repository

> 在 Git 的概念中，仓库，就是你存在.git目录的那个文件夹内的所有文件，包括隐藏的文件，Git程序会在当前目录以及上级目录查找是否存在.git文件，如果存在，则会将.git目录存在的文件夹开始下的所有文件当成你需要管理的文件，所以，我们如果想将某个文件夹当做一个Git仓库，你可以在那个文件夹下通过终端来执行

## 创建本地仓库
* 选择一个目录作为项目的本地仓库，进入该目录。
* 初始化，把这个目录变成Git可以管理的仓库
```bash
$ git init
```
* 创建并编辑 `.gitignore`
```bash
# .gitignore 内容示例
.DS_Store
node_modules
npm-debug.log
```
* 把新的文件操作记录添加到暂存区（stage）
```bash
$ git add .
$ git add foo.js
```
* 把暂存区的文件操作记录提交到本地仓库
```bash
$ git commit -m 'create'
```

## 提交远程仓库
* 查看本地仓库地址当前对应的远程仓库
```bash
$ git remote show origin
```
* 先在远程服务端创建一个远程仓库，每个远程仓库都会分别有一个https地址和一个ssh地址
* 设置本地仓库对应的远程仓库
```bash
$ git remote add origin https://xxx.com/xxx.git
```
* 修改本地仓库对应的远程仓库
```bash
$ git remote set-url origin https://xxx.com/xxx.git
```
* 把本地仓库的内容推送到远程仓库
```bash
$ git push origin master
$ git push -u origin master
```

### 1. 使用 https
* 设置账户
```bash
$ git config user.name "xxx"
$ git config --global user.name "xxx"
```
* 设置邮箱
```bash
$ git config user.email "xxx@gmail.com"
$ git config --global user.email "xxx@gmail.com"
```
* 设置记住密码
```bash
# 默认15分钟
$ git config --global credential.helper cache
# 长期存储
$ git config --global credential.helper store
# 增加远程地址的时候带上密码
$ git remote add origin http://yourname:password@git.github.com/name/project.git
```
* https每次上传文件大小被限制，无法满足大文件的上传

### 2. 使用 ssh
* 修改本地仓库对应的远程仓库，改为使用ssh
* 生成 sshkey
```bash
$ ssh-keygen -t rsa -C "xxx@xxx.com"
# 三次回车即可生成 ssh key
```
* 查看生成ssh公钥，并添加到远程后台中
```bash
$ cat ~/.ssh/id_rsa.pub
# ssh-rsa AAAAB3NzaC1yc2EA...
```
* 验证是否添加成功
```bash
$ ssh -T git@github.com
# Welcome
```

## 克隆远程仓库到本地
* 获取远程仓库的地址
* 克隆远程仓库的默认分支到本地库
```bash
$ git clone https://xxx.com/xxx.git
```
* 克隆远程仓库的制定分支到本地库
```bash
$ git clone -b <branch name> https://xxx.com/xxx.git
```

## 同步远程仓库到本地
* 先保证当前本地仓库暂存区是干净的
* 同步远程仓库到本地
```bash
$ git pull origin master
# or 使用 git fetch
$ git fetch origin master
$ git diff master..origin/master
$ git merge origin/master
```
