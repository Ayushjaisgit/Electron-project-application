const { app, BrowserWindow } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('https://pro.ith.tech/') // Replace with your desired website URL

  // Remove the menu bar
  mainWindow.removeMenu()

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    app.quit()
  })
}

app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
