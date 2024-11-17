import { Components } from '@mui/material/styles/components'

const textFieldOverrides = (): Components => ({
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'small'
    },
    styleOverrides: {}
  }
})

export default textFieldOverrides
