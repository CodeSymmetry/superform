import Typography from '@mui/material/Typography'
import SuperButtonLink from '@renderer/components/navigation/SuperButtonLink'
import Stack from '@mui/material/Stack'

interface RecentDomainLinkProps {
  name: string
  description: string
}

const RecentDomainLink = (props: RecentDomainLinkProps): JSX.Element => {
  const { name, description } = props
  return (
    <SuperButtonLink to={`/domain/${name}`}>
      <Stack>
        <Typography textTransform="none" fontWeight="bold">
          {name}
        </Typography>
        <Typography textTransform="none">{description}</Typography>
      </Stack>
    </SuperButtonLink>
  )
}

export default RecentDomainLink
