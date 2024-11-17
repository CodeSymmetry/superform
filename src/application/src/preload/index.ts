import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { Domain } from '../model/domains/domain'
import { RecentDomain } from '../model/domains/recentDomain'
import { AddRecentDomainProps } from '../main/domains/recent/addRecentDomain'

interface apiProps {
  createDomain: (domain: Domain) => Promise<string>
  addRecentDomain: (props: AddRecentDomainProps) => Promise<RecentDomain>
  getRecentDomains: () => Promise<RecentDomain[]>
}

// Custom APIs for renderer
const api: apiProps = {
  createDomain: (domain: Domain) => ipcRenderer.invoke('create-domain', domain),
  addRecentDomain: (props: AddRecentDomainProps) => ipcRenderer.invoke('add-recent-domain', props),
  getRecentDomains: () => ipcRenderer.invoke('get-recent-domains')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
