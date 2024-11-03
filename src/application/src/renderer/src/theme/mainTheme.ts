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
  },
  palette: {
    primary: {
      main: '#ff007f'
    },
    text: {
      primary: '#d6ced2'
    }
  }
})

export default mainTheme
