import React from 'react'
import 'enl-styles/Home/Header/NavigationPrimary.css'

const Li = ({ name, href }) => (
  <li className='NavigationPrimary__Li'>
    <a href={href}>{name}</a>
  </li>
)

const NavigationPrimary = ({ navPrimary }) => (
  <ul className='NavigationPrimary__Ul'>
    {
      navPrimary.map((item) => {
        return (
          <Li key={item.id} name={item.name} href={item.href} />
        )
      })
    }
  </ul>
)

export default NavigationPrimary
