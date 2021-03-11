import React from 'react'
import 'enl-styles/Home/Hero/Buttons.css'

const Play = () => (
  <a className='Play__Container' href='#'>
    <span className='Play'>
      <span className='Play__Icon' />
      <span className='Play__Text'>Play</span>
    </span>
  </a>
)

const MyList = () => (
  <div className='MyList__Container'>
    <a className='MyList'>
      <span className='MyList__Icon' />
      <span className='MyList__Text'>My List</span>
    </a>
  </div>
)

const MoreInfo = () => (
  <a className='MoreInfo__Container' href='#'>
    <span className='MoreInfo'>
      <span className='MoreInfo__Icon' />
      <span className='MoreInfo__Text'>More Info</span>
    </span>
  </a>
)

const Buttons = (props) => (
  <div className='Buttons'>
    <Play />
    {/* <MyList /> */}
    <MoreInfo />
  </div>
)

export default Buttons
