import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {NavContainer, HeaderLogo, HeaderLogoutButton} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <>
      <NavContainer>
        <Link to="/">
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
        </Link>
        <HeaderLogoutButton type="button" onClick={onClickLogout}>
          Logout
        </HeaderLogoutButton>
      </NavContainer>
    </>
  )
}

export default withRouter(Header)
