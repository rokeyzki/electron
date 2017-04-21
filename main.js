'use strict';

const electron = require('electron');
const app = electron.app;  // 控制App生命周期的模块
const BrowserWindow = electron.BrowserWindow;  // 创建原生窗口的模块

// 保持对窗口对象的全局引用。如果不这么做的话，JavaScript垃圾回收的时候窗口会自动关闭
var mainWindow = null;

// 当应用初始化结束后调用这个方法，并渲染浏览器窗口
app.on('ready', function() {
  // 创建一个窗口
  mainWindow = new BrowserWindow({
    width: 1200, 
    height: 800,
    webPreferences: {
      nodeIntegration: false // 不在app中暴露node接口，使第三方库可以使用`module`,`export`,`require`关键字
    }
  });

  // 加载index.js
  mainWindow.loadURL('file://' + __dirname + '/docs/_book/index.html');

  // 打开 DevTools（PS：生产环境清注释这一项）
  // mainWindow.webContents.openDevTools();

  // 窗口关闭时触发
  mainWindow.on('closed', function() {
    // 如果你的应用允许多个屏幕，那么可以把它存在Array里。
    // 因此删除的时候可以在这里删掉相应的元素
    mainWindow = null;
  });
});

// 当所有的窗口关闭的时候退出应用
app.on('window-all-closed', function() {
  // 在 OS X 系统里，除非用户按下Cmd + Q，否则应用和它们的menu bar会保持运行
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 对于 OS X 系统，当没有app窗口存在时，dock图标被点击后会重新创建一个app窗口
  if (mainWindow === null) {
    createWindow();
  }
});
