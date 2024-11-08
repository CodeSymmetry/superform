import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

const WelcomeLayout = (): JSX.Element => {
  return (
    <Container disableGutters maxWidth="xl">
      <Outlet />
    </Container>
  )
}

export default WelcomeLayout
