import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import mainTheme from './theme/theme'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Box from '@mui/material/Box'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Box
          height="100vh"
          width="100%"
          sx={{ background: 'radial-gradient(circle, #101026 0%, #121220 50%, #0b0b0d 100%)' }}
        >
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
