import React from 'react'
import 'enl-styles/LandingPage/Hero.css'

const Hero = ({ hero }) => (
  <div className='Pres__Hero__Container'>
    <div className='Hero'>
      <img className='Hero__Img' src={hero.image} srcSet={`${hero.image1000} 1000w, ${hero.image1500} 1500w, ${hero.image1800} 1800w`} />
      <div className='Hero__Img_Gradient' />
    </div>
  </div>
)

export default Hero
