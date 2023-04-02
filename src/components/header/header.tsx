import { Menu, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './header.css'

interface HeaderProps {
  loading: boolean
}

const Header = ({ loading }: HeaderProps): JSX.Element => {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/">
        <h1 className="ui blue header">Podcaster</h1>
      </Menu.Item>
      <Menu.Item fitted="vertically" position="right">
        <div className="podcast-spinner">
          <Loader size="small" active={loading} />
        </div>
      </Menu.Item>
    </Menu>
  )
}

export default Header
