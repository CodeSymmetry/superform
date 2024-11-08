import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  description: yup.string().max(1000, 'Maximum length for description is 1000')
})

export default validationSchema
