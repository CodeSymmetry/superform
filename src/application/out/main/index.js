"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const fs = require("fs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
const fs__namespace = /* @__PURE__ */ _interopNamespaceDefault(fs);
const icon = path.join(__dirname, "../../resources/icon.png");
const getRecentDomainsFilePath = () => {
  const userDataDir = electron.app.getPath("userData");
  return path__namespace.join(userDataDir, "recentDomains.json");
};
const isErrnoException = (error) => {
  return error instanceof Error && "code" in error;
};
const getRecentDomains = async () => {
  const filePath = getRecentDomainsFilePath();
  try {
    const fileContent = fs__namespace.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    if (isErrnoException(error) && error.code == "ENOENT") {
      fs__namespace.writeFileSync(filePath, JSON.stringify([]), "utf-8");
      return [];
    } else {
      throw error;
    }
  }
};
const saveRecentDomains = async (recentDomains) => {
  const filePath = getRecentDomainsFilePath();
  fs__namespace.writeFileSync(filePath, JSON.stringify(recentDomains, null, 2), "utf-8");
};
const addRecentDomain = async (props) => {
  const { path: path2, domain } = props;
  const recentDomains = await getRecentDomains();
  const existingIndex = recentDomains.findIndex((recentDomain2) => recentDomain2.path === path2);
  if (existingIndex !== -1) {
    recentDomains.splice(existingIndex, 1);
  }
  const recentDomain = {
    name: domain.name,
    description: domain.description,
    path: path2
  };
  recentDomains.unshift(recentDomain);
  if (recentDomains.length > 5) {
    recentDomains.pop();
  }
  await saveRecentDomains(recentDomains);
  return recentDomain;
};
const createDomain = async (domain) => {
  const documentsDir = electron.app.getPath("documents");
  const domainDir = path__namespace.join(documentsDir, "superform", domain.name);
  if (!fs__namespace.existsSync(domainDir)) {
    fs__namespace.mkdirSync(domainDir, { recursive: true });
  }
  const filePath = path__namespace.join(domainDir, "domain.json");
  fs__namespace.writeFileSync(filePath, JSON.stringify(domain, null, 2), "utf-8");
  addRecentDomain({ path: filePath, domain });
  return filePath;
};
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path__namespace.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path__namespace.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  electron.ipcMain.handle("create-domain", async (_, data) => {
    return await createDomain(data);
  });
  electron.ipcMain.handle("get-recent-domains", async () => {
    return await getRecentDomains();
  });
  electron.ipcMain.handle("add-recent-domain", async (_, data) => {
    return await addRecentDomain(data);
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
//# sourceMappingURL=index.js.map
