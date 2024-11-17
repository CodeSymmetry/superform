"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  createDomain: (domain) => electron.ipcRenderer.invoke("create-domain", domain),
  addRecentDomain: (props) => electron.ipcRenderer.invoke("add-recent-domain", props),
  getRecentDomains: () => electron.ipcRenderer.invoke("get-recent-domains")
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
//# sourceMappingURL=index.js.map
