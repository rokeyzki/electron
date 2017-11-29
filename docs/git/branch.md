# 分支 Branch

> 这是Git中最重要的也是最常用的概念和功能之一，分支功能解决了正在开发的版本与上线版本稳定性冲突的问题在Git使用过程中，我们的默认分支一般是Master，当然，这是可以修改的，我们在Master完成一次开发，生成了一个稳定版本，那么当我们需要添加新功能或者做修改时，只需要新建一个分支，然后在该分支上开发，完成后合并到主分支即可

## 查看分支
```bash
$ git branch
$ git branch -a
```

## 创建分支
```bash
// 切换分支前，必须先commit当前分支的代码，否则会出现异常
$ git branch develop
```

## 切换分支
```bash
$ git checkout develop
```

## 创建 + 切换至分支
```bash
$ git checkout -b develop
```

## 分支develop合并到当前分支
```bash
$ git checkout master
$ git merge develop
```

## 删除分支develop
```bash
$ git branch –d develop
```

## 把本地仓库某个分支都推送到远程仓库
```bash
$ git push origin develop
```

## 把本地仓库所有分支都推送到远程仓库
```bash
$ git push --all origin
```

## 删除远程分支develop
```bash
$ git push origin -d develop
```

## 查看各个本地分支默认提交的远程分支
```bash
$ git branch -vv
```

## 拉取远程分支 + 创建 + 切换至该本地分支
```bash
$ git checkout -b 本地分支名 origin/远程分支名
```
