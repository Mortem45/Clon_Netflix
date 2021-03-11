import React from 'react'
import 'enl-styles/Home/Hero/Background.css'

const Background = ({ ImgBackground }) => (
  <div className='Background__Container'>
    <img className='Background__Image' src={ImgBackground} />
    <div className='Background__Trailer' />
    <div className='Background__Vignette' />
  </div>
)

export default Background
