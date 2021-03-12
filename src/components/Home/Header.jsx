import React from 'react'
import HeaderContainer from '../Home/Header/HeaderContainer'
import NavigationPrimary from '../Home/Header/NavigationPrimary'
import NavigationSecondary from '../Home/Header/NavigationSecondary'

const Header = ({ header }) => (
  <HeaderContainer>
    <a className='Home__Header__Logo' />
    <NavigationPrimary navPrimary={header.primary_navigation} />
    <NavigationSecondary imgProfile={header.secondary_navigation.img_profile} />
  </HeaderContainer>
)

export default Header
