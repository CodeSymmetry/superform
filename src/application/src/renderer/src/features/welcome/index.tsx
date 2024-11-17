import { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import CreateDomainWelcomeMenuItem from './components/CreateDomainWelcomeMenuItem'
import OpenDomainWelcomeMenuItem from './components/OpenDomainWelcomeMenuItem'
import CloneDomainWelcomeMenuItem from './components/CloneDomainWelcomeMenuItem'
import { RecentDomain } from 'src/model/domains/recentDomain'
import RecentDomainLink from './components/RecentDomainLink'

const Welcome = (): JSX.Element => {
  const { palette } = useTheme()
  const [recentDomains, setRecentDomains] = useState<RecentDomain[]>([])
  useEffect(() => {
    window.api.getRecentDomains().then((values) => {
      setRecentDomains(values)
    })
  }, [])

  return (
    <Grid container spacing={10} alignItems="center">
      <Grid size={{ lg: 6, sm: 12 }}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Stack spacing={7}>
            <Stack spacing={3}>
              <Box p={2.5}>
                <Typography component="h2" variant="h6">
                  Start
                </Typography>
              </Box>
              <Stack spacing={2}>
                <CreateDomainWelcomeMenuItem />
                <OpenDomainWelcomeMenuItem />
                <CloneDomainWelcomeMenuItem />
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Box p={2.5}>
                <Typography component="h2" variant="h6">
                  Recent Domains
                </Typography>
              </Box>
              <Stack spacing={2}>
                {recentDomains.map((recentDomain) => (
                  <RecentDomainLink key={recentDomain.name} {...recentDomain} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ lg: 6, sm: 12 }}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Stack>
            <Typography>Welcome to</Typography>
            <Typography
              variant="h1"
              component="h1"
              fontWeight="bold"
              sx={{
                background: `linear-gradient(to right, ${palette.primary.main}, ${palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              superform_
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Welcome
