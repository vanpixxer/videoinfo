const electron = require('electron');

const { app, BrowserWindow } = electron;

//add event handler to watch app object
//can create new browser window inside of app.on() event handler
app.on( 'ready', () => {
  const mainWindow = new BrowserWindow({});
  //instruct browser window to load HTML document
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //dirname is a global variable provided by Node.js
});
