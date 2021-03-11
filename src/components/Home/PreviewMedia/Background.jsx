import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import BackgroundImage from './BackgroundImage'

const Backgorund = ({ background }) => (
  <BackgroundContainer>
    <BackgroundImage image={background} />
  </BackgroundContainer>
)

export default Backgorund
