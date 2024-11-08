import { ElectronAPI } from '@electron-toolkit/preload'

declare interface apiProps {
  createDomain: (domain: Domain) => Promise<string>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: apiProps
  }
}
