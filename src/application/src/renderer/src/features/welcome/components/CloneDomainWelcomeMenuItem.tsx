import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import WelcomMenuButton from './WelcomeMenuButton'

const CloneDomainWelcomeMenuItem = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Cloning domain')
  }

  return (
    <WelcomMenuButton
      title="Clone"
      description="Clone existing domain from Git repository"
      onClick={handleClick}
      icon={CloudDownloadOutlinedIcon}
    />
  )
}

export default CloneDomainWelcomeMenuItem
