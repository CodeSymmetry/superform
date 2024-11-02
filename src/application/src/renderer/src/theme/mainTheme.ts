import { createTheme } from '@mui/material/styles'

const mainTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: grey;
        }
      `
    }
  }
})

export default mainTheme
