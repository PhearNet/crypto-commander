const {app, Menu, Tray, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');
const isDevelopment = process.env.NODE_ENV !== 'production';

// if(isDevelopment)
//     require('electron-reload')(`${__dirname}/dist`);

let mainWindow;

let screens ={
  tray: null,
  logon: null,
  dataviews: [],
};

let tray;

function showLogonScreen () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 950, height: 600});
  // mainWindow.setMenu(null);
  // and load the index.html of the app.
    const url = isDevelopment
        ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
        : `file://${__dirname}/index.html`;

    mainWindow.loadURL(url);
    mainWindow.on('show', () => {
        tray.setHighlightMode('always')
    });
    mainWindow.on('hide', () => {
        tray.setHighlightMode('never')
    });
    // Open the DevTools.
    if(isDevelopment)
      mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function init(){
    tray = new Tray(path.join(__static, 'icons/default.png'));
    // tray = new Tray(require('../assets/images/examples.png'));
    const contextMenu = Menu.buildFromTemplate([
        // {label: 'New Window', click(){showLogonScreen()}},
        {role: 'quit'}
    ]);
    tray.on('click', () => {
      console.log('click');
        mainWindow && mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    });
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);

    if(!mainWindow) showLogonScreen();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', init);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    // app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// require('./bin/www');