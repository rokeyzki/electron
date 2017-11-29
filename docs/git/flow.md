# 流程 Git Flow

![图3](./img/3.png)  

![图8](./img/8.png)

## master 分支
* 生命周期长
* 代表生产环境当前所运行的分支版本
* 用于发布生产环境代码

## develop 分支
* 生命周期长
* 代表开发环境当前最新的分支版本

## feature 分支
* 生命周期有限
* 用于开发新功能模块时所使用的分支（一般为本地分支）
* 每添加一个新功能，最好新建一个 `feature` 分支，在上面开发完成后，合并到 `develop` 分支，然后删除该 `feature` 分支

## release 分支
* 生命周期有限
* 当一个迭代周期的功能开发完成后，会从 `develop` 分支上拉取一个 `release` 分支提供给测试人员做质量验收
* 测试阶段，所有的 bug 都必须在 `release` 分支上修复
* 一旦打了 `release` 分支之后不要从 `develop` 分支上合并新的改动到 `release` 分支
* 迭代测试结束后，合并 `release` 到 `master` 和 `develop`， 同时在 `master` 分支上打个 Tag 记住 `release` 版本号，然后删除该 `release` 分支

## hotfix 分支
* 生命周期短
* 用于修复线上 bug 及紧急补丁
* 遇到此类特殊情况时，直接从 `master` 上拉取 `hotfix` 分支，`hotfix` 分支修复完 bug 后，测试介入
* 测试通过的 `hotfix` 分支，需要分别合并 `master` 和 `develop` 分支，最后删除 `hotfix` 分支
