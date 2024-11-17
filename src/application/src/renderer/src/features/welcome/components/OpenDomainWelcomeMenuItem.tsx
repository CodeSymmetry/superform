import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import WelcomMenuButton from './WelcomeMenuButton'

const OpenDomainWelcomeMenuItem = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Opening domain')
  }

  return (
    <WelcomMenuButton
      title="Open"
      description="Open existing domain from the file system"
      onClick={handleClick}
      icon={FolderOutlinedIcon}
    />
  )
}

export default OpenDomainWelcomeMenuItem
