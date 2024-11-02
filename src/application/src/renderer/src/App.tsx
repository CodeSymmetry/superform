import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import mainTheme from './theme/mainTheme'

function App(): JSX.Element {
  const ipcHandle = (): void => {
    console.log('sending ipc ping')
    window.electron.ipcRenderer.send('ping')
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Button variant="outlined" onClick={ipcHandle}>
        Ping
      </Button>
    </ThemeProvider>
  )
}

export default App
