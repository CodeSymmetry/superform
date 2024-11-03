import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

interface WelcomMenuItemProps {
  text: string
  url: string
  icon: JSX.Element
}

const WelcomMenuItem = (props: WelcomMenuItemProps): JSX.Element => {
  const { text, url, icon } = props
  const { palette } = useTheme()
  return (
    <Link
      to={url}
      style={{ textDecoration: 'none', color: palette.primary.main, alignItems: 'center' }}
    >
      <Stack direction="row" color={palette.primary.main} spacing={1}>
        {icon}
        <Typography>{text}</Typography>
      </Stack>
    </Link>
  )
}

export default WelcomMenuItem
