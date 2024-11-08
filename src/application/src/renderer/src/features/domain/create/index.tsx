import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/redux/store'
import { ActionType } from '@renderer/actions'
import { toggleAction } from '@renderer/actions/slice'
import { useAppDispatch } from '@renderer/redux/hooks'
import { useFormik } from 'formik'
import validationSchema from './validationSchema'
import { Domain } from 'src/model/domains/domain'
import { useNavigate } from 'react-router-dom'

const CreateDomainDialog = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isCreateDomainActive = useSelector(
    (state: RootState) => state.actions.actions[ActionType.CreateDomain]
  )
  const initialValues: Domain = {
    name: '',
    description: ''
  }
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      window.api.createDomain(values).then(() => {
        helpers.resetForm()
        dispatch(toggleAction(ActionType.CreateDomain))
        navigate('/domain')
      })
    }
  })
  const handleCancel = (): void => {
    formik.resetForm()
    dispatch(toggleAction(ActionType.CreateDomain))
  }

  return (
    <Dialog
      open={isCreateDomainActive || false}
      onClose={handleCancel}
      PaperProps={{
        component: 'form',
        onSubmit: formik.handleSubmit
      }}
    >
      <DialogTitle>Create Domain {formik.values.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <DialogContentText>
            Please provide Name and Description for your new Domain. Please read more about Domains
            in our docs under section Domains.
          </DialogContentText>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            multiline
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateDomainDialog
