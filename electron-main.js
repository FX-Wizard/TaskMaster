const {app, BrowserWindow, Menu} = require('electron')


let win

app.on('ready', () => {
    win = new BrowserWindow({})

    win.loadFile('./dist/index.html')

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

    win.removeMenu()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
