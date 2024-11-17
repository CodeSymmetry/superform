import { useParams } from 'react-router-dom'

const Domain = (): JSX.Element => {
  const { domainName } = useParams<{ domainName: string }>()

  return <>Hello from Domain {domainName}</>
}

export default Domain
