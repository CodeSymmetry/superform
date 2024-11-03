import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

const HomeLayout = (): JSX.Element => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Full viewport height for vertical centering
      }}
    >
      <Outlet />
    </Container>
  )
}

export default HomeLayout
