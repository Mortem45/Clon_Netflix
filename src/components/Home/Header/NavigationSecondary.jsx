import React from 'react'
import NavElement from './NavElement'
import 'enl-styles/Home/Header/NavigationSecondary.css'

const NavigationSecondary = ({ imgProfile }) => (
  <div className='NavigationSecondary__Container'>
    <NavElement>
      <div className='NavigationSecondary__Search'>
        <button className='NavigationSecondary__Button'>
          <span className='NavigationSecondary__Icon' />
        </button>
      </div>
    </NavElement>
    <NavElement>
      <div className='NavigationSecondary__Kids'>
        <a href='/Kids'>KIDS</a>
      </div>
    </NavElement>
    <NavElement>
      <span className='NavigationSecondary__Notifications'>
        <button className='NavigationSecondary__Notifications__Menu'>
          <span className='NavigationSecondary__Notifications__Icon' />
        </button>
      </span>
    </NavElement>
    <NavElement>
      <div className='NavigationSecondary__Acount__Menu'>
        <div className='NavigationSecondary__Acount__button'>
          <a href='/YourAccount'>
            <span className='NavigationSecondary__Acount__Menu__ContImg'>
              <img className='NavigationSecondary__Acount__Menu__Img' src={imgProfile} />
            </span>
          </a>
          <span className='NavigationSecondary__Acount__Caret' />
        </div>
      </div>
    </NavElement>
  </div>
)

export default NavigationSecondary
