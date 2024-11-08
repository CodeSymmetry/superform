import CreateDomainDialog from '../features/domain/create'
import { ActionType } from './actionType'

const Actions = (): JSX.Element => {
  return (
    <>
      <CreateDomainDialog />
    </>
  )
}

export default Actions

export { ActionType }
