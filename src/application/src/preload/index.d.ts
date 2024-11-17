import { ElectronAPI } from '@electron-toolkit/preload'
import { Domain } from 'src/model/domains/domain'
import { RecentDomain } from 'src/model/domains/recentDomain'

declare interface apiProps {
  createDomain: (domain: Domain) => Promise<string>
  addRecentDomain: (domainId: string) => Promise<RecentDomain>
  getRecentDomains: () => Promise<RecentDomain[]>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: apiProps
  }
}
