##Crypto Commander GUI
Electron Cross Platform Desktop App

####Built with:
https://www.electron.build/
https://webpack.electron.build/

###Configuration:
#####electron-build.json
```
{
  "appId": "io.rtcdb.cryptocommander",
  "linux":{
    "category": "System"
  }
}
```
#####electron-webpack.json
```
{
  "title": true,
  "main": {
    "sourceDirectory": "src/gui/desktop"
  },
  "renderer": {
    "sourceDirectory": "src/gui"
  }
}
```