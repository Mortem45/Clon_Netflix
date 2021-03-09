import React from 'react'
import Ilustration from '../utils/Ilustration'
import 'enl-styles/LandingPage/IlustrationRight.css'

const IlustrationRight = ({ data }) => (
  <Ilustration>
    <img className='IlustrationRight__Img' src={data.img_background} />
    <div className='IlustrationRight__Container__Video'>
      <video className='IlustrationRight__Video' autoPlay playsInline muted loop>
        <source src={data.video} type='video/mp4' />
      </video>
    </div>
  </Ilustration>
)

export default IlustrationRight
