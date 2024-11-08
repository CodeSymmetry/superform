import { Button, Stack, SvgIconProps, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'

interface WelcomMenuItemProps {
  title: string
  description: string
  icon: React.ElementType<SvgIconProps>
  onClick: () => void
}

const WelcomMenuButton = (props: WelcomMenuItemProps): JSX.Element => {
  const { palette } = useTheme()
  const { title, description, onClick, icon: Icon } = props

  return (
    <Button
      size="large"
      sx={{ textAlign: 'left', justifyContent: 'left', padding: 2.5 }}
      onClick={onClick}
    >
      <Stack direction="row" alignItems="center" spacing={3}>
        <Icon fontSize="large" />
        <Stack>
          <Typography fontWeight="bold">{title}</Typography>
          <Typography textTransform="none" color={palette.primary.dark}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Button>
  )
}

export default WelcomMenuButton
