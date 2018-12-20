const electron = require('electron');
const ffmpeg = require( 'fluent-ffmpeg' );

//import ipc main object from Electron
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow

//add event handler to watch app object
//can create new browser window inside of app.on() event handler
app.on( 'ready', () => {
 mainWindow = new BrowserWindow({});
  //instruct browser window to load HTML document
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //dirname is a global variable provided by Node.js
});

//listen for message, video:submit from index.html
ipcMain.on( 'video:submit', (event, path) => {
    //get duration of video files
    ffmpeg.ffprobe(path, (err, metadata) => {
         mainWindow.webContents.send('video:metadata', metadata.format.duration);
    });
});
