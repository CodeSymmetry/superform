import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import WelcomMenuItem from './components/WelcomeMenuItem'

const Welcome = (): JSX.Element => {
  return (
    <Stack spacing={4}>
      <Stack>
        <Typography>Welcome to</Typography>
        <Typography
          variant="h1"
          component="h1"
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(to right, #ff007f, #0000b3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          SuperForm
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography component="h2" variant="h5" fontWeight="bold">
            Start
          </Typography>
          <Stack spacing={1}>
            <WelcomMenuItem
              text="Create new Domain"
              url="/domain/create"
              icon={<AddOutlinedIcon />}
            />
            <WelcomMenuItem
              text="Open existing Domain from file system"
              url="/domain/create"
              icon={<FolderOutlinedIcon />}
            />
            <WelcomMenuItem
              text="Clone existing Domain from remote Git repository"
              url="/domain/create"
              icon={<CloudDownloadOutlinedIcon />}
            />
          </Stack>
        </Stack>
        <Stack>
          <Typography component="h2" variant="h5" fontWeight="bold">
            Recent Domains
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Welcome
