### 开发运行app（依赖 electron-prebuilt）

```
// mac
sudo ./node_modules/.bin/electron .
// win
.\node_modules\.bin\electron .
```

### 开发注意事项

* 开启控制面板调试

```javascript
// 在 main.js 中对BrowserWindow实例对象进行配置
mainWindow.webContents.openDevTools(); // 打开 DevTools（PS：生产环境清注释这一项）
```

* 当第三方库有使用到 `module`,`export`,`require` 这些保留关键字的时候（例如jQuery/RequireJS/Meteor/AngularJS），会与Electron产生冲突，有以下两种方法可以解决

```javascript
// 方法一：在 main.js 中对BrowserWindow实例对象进行配置，在生产环境推荐这个方法（缺点：无法在app运行时再使用 Node.js and Electron APIs）
const {BrowserWindow} = require('electron')
let mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: false
  }
})
// win.show()
```

```html
<!-- 方法二：在入口文件 index.html 的head头部，先添加如下脚本 -->
<head>
  <script>
    window.nodeRequire = require;
    delete window.require;
    delete window.exports;
    delete window.module;
  </script>
</head>
<!-- 之后再引入和使用第三方库，例如<script type="text/javascript" src="jquery.js"></script> -->
```

### 打包生成app（依赖 electron-packager）

```
// linux: --platform=linux
// macOS: --platform=darwin
sudo ./node_modules/.bin/electron-packager ./ "My Docs" --platform=darwin --out presenterTool --arch=x64 --version 1.3.4 --overwrite --ignore="(node_modules|README.md)"
```

```
// windows: --platform=win32
.\node_modules\.bin\electron-packager .\ "My Docs" --platform=win32 --out presenterTool --arch=x64 --version 1.3.4 --overwrite --ignore="(node_modules|README.md)"
// 生成的程序文件在 presenterTool/My Docs-win32-x64 目录中，在windows系统下，整个 My Docs-win32-x64 目录都是必须的，如果只复制出exe文件是不能正确执行的。
```

### 加密源码

### 压缩app