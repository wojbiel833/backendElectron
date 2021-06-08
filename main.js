"use strict";

const path = require("path");
const { app, BrowserWindow } = require("electron");
const { off } = require("process");

const initialSate = {
  status: "off",
  time: 1200,
  timer: null,
};

function main() {
  // create new window
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
    height: 600,
  });

  // load app/index.html as the window content
  mainWindow.loadFile(path.join("app", "index.html"));
  mainWindow.webContents.openDevTools();
}

app.on("ready", main);

app.on("window-all-closed", function () {
  app.quit();
});
