const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const path = require('path')

let template = [
    {
        label: 'App',
        submenu: [
            {
                label: 'Reset Tracker',
                role: 'reload',
                accelerator: 'F5'
            }, {
                label: 'Toggle Dev Tools',
                role: 'toggledevtools',
                accelerator: 'CommandOrControl+Alt+I',
                enabled: true,
                visible: true
            }, {
                label: 'Exit',
                role: 'quit',
                accelerator: 'Alt+F4'
            }
        ]
    }, {
        label: 'Version ' + app.getVersion(),
        click() {
            changeLog()
        }
    }
]

const changelogOptions = {
    type: 'info',
    buttons: ['Close'],
    title: 'Changelog',
    message: 'Changes to v1.0.1',
    detail: `- Added Tooltips for World Unlocks
    - Added Detailed Icons (Simple Enabled by Default)
    - Added Background Image Toggle (Off by Default)
    
    Changes coming to v1.x.x
    - Level Tracking
    - Ability to change icons for checks`
}

//Function for Changelog
function changeLog() {
    dialog.showMessageBox(null, changelogOptions, (response, checkboxChecked) => { });
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 710,
        height: 950,
        title: "KH2 AP Item Tracker",
        webPreferences: { nodeIntegration: 'true', },
    })

    win.loadFile('src/server.html')

    //win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})