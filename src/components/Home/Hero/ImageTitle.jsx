import React from 'react'
import 'enl-styles/Home/Hero/ImageTitle.css'

const ImageTitle = ({ LogoSerie }) => (
  <div className='ImageTitle__Container'>
    <div className='ImageTitle'>
      <img className='ImageTitle__Image title-logo' src={LogoSerie} />
    </div>
  </div>
)

export default ImageTitle
