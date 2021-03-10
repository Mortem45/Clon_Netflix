import React from 'react'
import 'enl-styles/Login/LoginBackground.css'

const LoginBackground = (props) => {
  const { image, image1000, image1500, image1800 } = props.images

  return (
    <div className='LoginBackground'>
      <img className='LoginBackground__Img' src={image} srcSet={`${image1000} 1000w, ${image1500} 1500w, ${image1800} 1800w`} />
    </div>
  )
}

export default LoginBackground
