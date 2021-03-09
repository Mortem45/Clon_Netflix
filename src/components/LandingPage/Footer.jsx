import React from 'react'
import 'enl-styles/LandingPage/Footer.css'

const Li = ({ name }) => (
  <li className='Footer__Item'>
    <a className='Footer__Link' href='#'>
      <span>{name}</span>
    </a>
  </li>
)

const Footer = ({ footer }) => (
  <div className='Footer__Container'>
    <div className='Footer'>
      <p className='Footer__Top'>{footer.question}
        <a href={`tel:${footer.tel}`}>&nbsp; {footer.tel}</a>
      </p>
      <ul className='Footer__Ul'>
        {
          footer.footer_link.map((item) => {
            return (
              <Li key={item.name} name={item.name} />
            )
          })
        }
      </ul>
      <div className='Footer__Select__Container'>
        <div className='Footer__Select__Row'>
          <select className='Footer__Select' tabIndex='0'>
            <option value='/gt/'>Español</option>
            <option value='/gt-en/'>English</option>
          </select>
        </div>
      </div>
      <p className='Footer__Country'>{footer.country}</p>
    </div>
  </div>
)

export default Footer
