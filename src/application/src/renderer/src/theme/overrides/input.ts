import { Theme } from '@mui/material'
import { Components } from '@mui/material/styles/components'

const inputOverrides = (theme: Theme): Components => ({
  MuiInput: {
    defaultProps: {
      size: 'small'
    },
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
  },
  MuiOutlinedInput: {
    defaultProps: {
      size: 'small'
    },
    styleOverrides: {
      notchedOutline: {
        borderColor: theme.palette.grey[800],
        '&:hover': {
          borderColor: theme.palette.primary.dark
        },
        '&$focused': {
          borderColor: theme.palette.primary.dark
        }
      }
    }
  }
})

export default inputOverrides
