const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  console.log('App iniciada!');

  let mainWindow = new BrowserWindow({
    height: 400,
    width: 600
  });

  mainWindow.loadURL(`file://${ __dirname }/app/index.html`);
});

app.on('window-all-closed', () => {
  app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  
  if (sobreWindow === null) {
    sobreWindow = new BrowserWindow({
      alwaysOnTop: true,
      frame: false,
      height: 200,
      width: 300,
    });
  }

  sobreWindow.on('closed', () => {
    sobreWindow = null;
  });

  sobreWindow.loadURL(`file://${ __dirname }/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});