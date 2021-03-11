import React from 'react'
import 'enl-styles/Home/Hero/DescriptionHero.css'

const DescriptionHero = ({ Description }) => (
  <div className='DescriptionHero__Container'>
    <div className='DescriptionHero'>
      {Description}
    </div>
  </div>
)

export default DescriptionHero
