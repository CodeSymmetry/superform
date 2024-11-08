import { Theme } from '@mui/material'
import { Components } from '@mui/material/styles/components'

const inputOverrides = (theme: Theme): Components => ({
  MuiInput: {
    defaultProps: {},
    styleOverrides: {
      underline: {
        '&:before': {
          borderBottomColor: theme.palette.grey[800] // Default bottom border color
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottomColor: theme.palette.primary.dark // Hover state bottom border color
        },
        '&:after': {
          borderBottomColor: theme.palette.primary.dark // Focused state bottom border color
        }
      }
    }
  }
})

export default inputOverrides
