import React from 'react'
import Ilustration from '../utils/Ilustration'
import 'enl-styles/LandingPage/IlustrationLeft.css'

const IlustrationLeft = ({ data }) => (
  <Ilustration>
    <img src={data.img_background} />
    <div className='IlustrationLeft__Container'>
      <div className='IlustrationLeft__Img2'>
        <img src={data.img_background2} />
      </div>
      <div className='IlustrationLeft__Container__Text'>
        <div className='IlustrationLeft__Text__0'>{data.texto_0}</div>
        <div className='IlustrationLeft__Text__1'>{data.texto_1}</div>
      </div>
    </div>
  </Ilustration>
)

export default IlustrationLeft
