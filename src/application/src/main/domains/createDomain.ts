import { app } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { Domain } from '../../model/domains/domain'
import { addRecentDomain } from './recent/addRecentDomain'

const createDomain = async (domain: Domain): Promise<string> => {
  const documentsDir = app.getPath('documents')
  const domainDir = path.join(documentsDir, 'superform', domain.name)
  if (!fs.existsSync(domainDir)) {
    fs.mkdirSync(domainDir, { recursive: true })
  }
  const filePath = path.join(domainDir, 'domain.json')
  fs.writeFileSync(filePath, JSON.stringify(domain, null, 2), 'utf-8')
  addRecentDomain({ path: filePath, domain })
  return filePath
}

export { createDomain }
