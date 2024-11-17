import { app } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { RecentDomain } from '../../../model/domains/recentDomain'

const getRecentDomainsFilePath = (): string => {
  const userDataDir = app.getPath('userData')
  return path.join(userDataDir, 'recentDomains.json')
}

const isErrnoException = (error: unknown): error is NodeJS.ErrnoException => {
  return error instanceof Error && 'code' in error
}

const getRecentDomains = async (): Promise<RecentDomain[]> => {
  const filePath = getRecentDomainsFilePath()
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent) as RecentDomain[]
  } catch (error: unknown) {
    if (isErrnoException(error) && error.code == 'ENOENT') {
      fs.writeFileSync(filePath, JSON.stringify([]), 'utf-8')
      return []
    } else {
      throw error
    }
  }
}

export { getRecentDomainsFilePath, getRecentDomains }
