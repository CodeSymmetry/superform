import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

const DomainLayout = (): JSX.Element => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default DomainLayout
