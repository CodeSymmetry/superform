import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import WelcomMenuItem from './WelcomeMenuButton'

const OpenDomainWelcomeMenuItem = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Opening domain')
  }

  return (
    <WelcomMenuItem
      title="Open"
      description="Open existing domain from the file system"
      onClick={handleClick}
      icon={FolderOutlinedIcon}
    />
  )
}

export default OpenDomainWelcomeMenuItem
