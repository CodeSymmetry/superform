import Button, { ButtonProps } from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

type RouterButtonProps = ButtonProps<'button', { component?: React.ElementType; to: string }>

const RouterButtonLink = (props: RouterButtonProps): JSX.Element => {
  return (
    <Button
      size="large"
      sx={{ textAlign: 'left', justifyContent: 'left', padding: 2.5 }}
      {...props}
    />
  )
}

const SuperButtonLink = (props: ButtonProps<'button', { to: string }>): JSX.Element => {
  return <RouterButtonLink component={RouterLink} {...props} />
}

export default SuperButtonLink
