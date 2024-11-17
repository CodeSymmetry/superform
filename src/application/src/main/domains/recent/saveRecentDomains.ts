import * as fs from 'fs'
import { getRecentDomainsFilePath } from './getRecentDomains'
import { RecentDomain } from '../../../model/domains/recentDomain'

const saveRecentDomains = async (recentDomains: RecentDomain[]): Promise<void> => {
  const filePath = getRecentDomainsFilePath()
  fs.writeFileSync(filePath, JSON.stringify(recentDomains, null, 2), 'utf-8')
}

export { saveRecentDomains }
