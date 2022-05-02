import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import {
  HomeBgContainer,
  HomeCardContainer,
  HomeCardHeading,
  HomeCardImage,
} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <HomeBgContainer>
        <Header />
        <HomeCardContainer>
          <HomeCardHeading>Your Flexibility, Our Excellence</HomeCardHeading>
          <HomeCardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </HomeCardContainer>
      </HomeBgContainer>
    </>
  )
}

export default Home
