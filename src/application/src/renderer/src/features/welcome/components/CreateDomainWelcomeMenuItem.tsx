import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import WelcomMenuItem from './WelcomeMenuButton'
import { useAppDispatch } from '@renderer/redux/hooks'
import { toggleAction } from '@renderer/actions/slice'
import { ActionType } from '@renderer/actions'

const CreateDomainWelcomeMenuItem = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const handleClick = (): void => {
    dispatch(toggleAction(ActionType.CreateDomain))
  }

  return (
    <WelcomMenuItem
      title="Create"
      description="Start from clean page"
      onClick={handleClick}
      icon={AddOutlinedIcon}
    />
  )
}

export default CreateDomainWelcomeMenuItem
