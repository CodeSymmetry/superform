import { createTheme } from '@mui/material/styles'
import textFieldOverrides from './overrides/textField'
import inputOverrides from './overrides/input'
import palette from './palette'

const baseTheme = createTheme({
  palette: palette
})

const theme = createTheme({
  ...baseTheme,
  components: {
    ...textFieldOverrides(),
    ...inputOverrides(baseTheme)
  }
})

export default theme
