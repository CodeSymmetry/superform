import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import WelcomMenuItem from './WelcomeMenuButton'

const CloneDomainWelcomeMenuItem = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Cloning domain')
  }

  return (
    <WelcomMenuItem
      title="Clone"
      description="Clone existing domain from Git repository"
      onClick={handleClick}
      icon={CloudDownloadOutlinedIcon}
    />
  )
}

export default CloneDomainWelcomeMenuItem
