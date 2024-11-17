import { Domain } from '../../../model/domains/domain'
import { RecentDomain } from '../../../model/domains/recentDomain'
import { getRecentDomains } from './getRecentDomains'
import { saveRecentDomains } from './saveRecentDomains'

export interface AddRecentDomainProps {
  domain: Domain
  path: string
}

const addRecentDomain = async (props: AddRecentDomainProps): Promise<RecentDomain> => {
  const { path, domain } = props
  const recentDomains = await getRecentDomains()
  const existingIndex = recentDomains.findIndex((recentDomain) => recentDomain.path === path)
  if (existingIndex !== -1) {
    recentDomains.splice(existingIndex, 1)
  }
  const recentDomain = {
    name: domain.name,
    description: domain.description,
    path: path
  }
  recentDomains.unshift(recentDomain)
  if (recentDomains.length > 5) {
    recentDomains.pop()
  }
  await saveRecentDomains(recentDomains)
  return recentDomain
}

export { addRecentDomain }
