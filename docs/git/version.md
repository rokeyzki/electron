# 版本 Version

> 严格来讲，Git并不存在版本的概念，但人们也硬是发展出了这么个玩意，在Git中，计数基础是提交，即我们常说的Commit，我们每做一点更改便可以产生一次提交，当提交累计起来，可以作为产品定型时，就在当前的Commit上打上一个标记，将这个标记我们称之为版本多少多少，那么就算完成了一个版本，标记本身被称之为Tag，请注意，在Git中，版本仅仅只是某一个提交的标签，并没有其他意义，Git本身也仅有打标签的功能，并没有版本功能，版本功能是根据Tag来扩展的，Git本身并没有

## 撤销
* 查看工作区与暂存区的差异
```bash
$ git diff
```
* 查看暂存区与版本库的差异
```bash
$ git diff --cached
```
* 撤销工作区的修改
```bash
$ git checkout .
```
* 撤销暂存区的修改
```bash
$ git reset HEAD
$ git reset HEAD dir/file(s)
```

## 回退
* 查看版本记录
```bash
$ git log
```
* 回退至上几个版本
```bash
$ git reset --hard HEAD~1
$ git reset --hard HEAD~2
```
* 回退至具体某个版本
```bash
$ git reset --hard 6fcfc89
```

## 暂存
* 先把需要暂存的文件操作记录添加到暂存区
```bash
$ git add .
$ git add foo.js
```
* 查看当前暂存区的情况
```bash
$ git status
```
* 暂存
```bash
$ git stash
$ git stash save 'some thing'
```
* 查看有多少暂存记录
```bash
$ git stash list
```
* 清空暂存记录
```bash
$ git stash clear
```
* 恢复暂存的改动
```bash
$ git stash apply
$ git stash apply <index>
```
* 删除暂存记录
```bash
$ git stash drop
$ git stash drop <index>
```
* 恢复暂存的改动，并且删除记录
```bash
$ git stash pop
$ git stash pop <index>
```

## 标签
* 创建标签
```bash
$ git tag v1.0
$ git tag v1.0 -m '第一版'
```
* 查看创建列表
```bash
$ git tag
$ git tag -n
```
* 切换到对应标签的版本
```bash
$ git checkout v1.0
$ git checkout master
```
* 删除标签
```bash
$ git tag -d v1.0
```
* 补打标签
```bash
$ git tag v1.0 9fbc3d0
```
* 标签发布到远程仓库
```bash
$ git push origin v1.0
$ git push origin –tags
```
* 删除远程仓库的标签
```bash
$ git push origin :refs/tags/v1.0
```
