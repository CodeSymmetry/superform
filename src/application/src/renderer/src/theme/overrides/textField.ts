import { Components } from '@mui/material/styles/components'

const textFieldOverrides: Components = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard'
    },
    styleOverrides: {
      root: {}
    }
  }
}

export default textFieldOverrides
