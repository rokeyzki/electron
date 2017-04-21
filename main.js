'use strict';

const electron = require('electron');
const app = electron.app; // 控制App生命周期的模块
const Menu = electron.Menu // 控制自定义菜单的模块
const BrowserWindow = electron.BrowserWindow;  // 创建原生窗口的模块

// 配置自定义菜单
let template = [{
  label: '编辑',
  submenu: [{
    label: '撤销',
    accelerator: 'CmdOrCtrl+Z',
    role: 'undo'
  }, {
    label: '重做',
    accelerator: 'Shift+CmdOrCtrl+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: '剪切',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  }, {
    label: '复制',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: '粘贴',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  }, {
    label: '全选',
    accelerator: 'CmdOrCtrl+A',
    role: 'selectall'
  }]
}, {
  label: '查看',
  submenu: [{
    label: '重载',
    accelerator: 'CmdOrCtrl+R',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        // 重载之后, 刷新并关闭所有的次要窗体
        if (focusedWindow.id === 1) {
          BrowserWindow.getAllWindows().forEach(function (win) {
            if (win.id > 1) {
              win.close()
            }
          })
        }
        focusedWindow.reload()
      }
    }
  }, {
    label: '切换全屏',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    label: '切换开发者工具',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I'
      } else {
        return 'Ctrl+Shift+I'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    }
  }, {
    type: 'separator'
  }, {
    label: '应用程序菜单演示',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: '应用程序菜单演示',
          buttons: ['好的'],
          message: '此演示用于 "菜单" 部分, 展示如何在应用程序菜单中创建可点击的菜单项.'
        }
        electron.dialog.showMessageBox(focusedWindow, options, function () { })
      }
    }
  }]
}, {
  label: '窗口',
  role: 'window',
  submenu: [{
    label: '最小化',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: '关闭',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: '重新打开窗口',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function () {
      app.emit('activate')
    }
  }]
}, {
  label: '帮助',
  role: 'help',
  submenu: [{
    label: '学习更多',
    click: function () {
      electron.shell.openExternal('http://electron.atom.io')
    }
  }]
}];

// 保持对窗口对象的全局引用。如果不这么做的话，JavaScript垃圾回收的时候窗口会自动关闭
let mainWindow = null;

// 当app初始化完成时
app.on('ready', function () {
  // 创建自定义菜单
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

  // 创建一个窗口
  createWindow();
});

// 当app所有的窗口都关闭时
app.on('window-all-closed', function () {
  // 在 OS X 系统里，除非用户按下Cmd + Q，否则应用和它们的menu bar会保持运行
  if (process.platform != 'darwin') { // 如果是 Windows 系统，则退出app
    app.quit();
  }
});

// 当app被激活时
app.on('activate', () => {
  // 对于 OS X 系统，当没有app窗口存在时，dock图标被点击后会重新创建一个app窗口
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  // 实例化一个窗口对象
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false // 不在app中暴露node接口，使第三方库可以使用`module`,`export`,`require`关键字
    }
  });

  // 加载访问入口的路径
  mainWindow.loadURL('file://' + __dirname + '/docs/_book/index.html');

  // 打开 DevTools（PS：生产环境清注释这一项）
  // mainWindow.webContents.openDevTools();

  // 窗口关闭时触发
  mainWindow.on('closed', function () {
    // 如果你的应用允许多个屏幕，那么可以把它存在Array里。
    // 因此删除的时候可以在这里删掉相应的元素
    mainWindow = null;
  });
}
