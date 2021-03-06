import React from 'react'
import 'enl-styles/Home/Hero/Buttons.css'

const Play = () => (
  <a className='Play__Container' href='#'>
    <button className='Play_Button' tabIndex='-1' type='button'>
      <div className='Play_Button_Icon_Container'>
        <div className='Play_Button_Icon'>
          <svg viewBox='0 0 24 24'>
            <path d='M6 4l15 8-15 8z' fill='currentColor'></path>
          </svg>
        </div>
      </div>
      <div className='Play_Button_'></div>
      <span className='Play_Button_Text'>Play</span>
    </button>
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
  <button className='MoreInfo_Button' type='button'>
    <div className='MoreInfo_Button_Icon_Container'>
      <div className='MoreInfo_Button_Icon'>
        <svg viewBox='0 0 24 24'>
          <path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z' fill='currentColor'></path>
        </svg>
      </div>
    </div>
    <div className='MoreInfo_Button_'></div>
    <span className='MoreInfo_Button_Text'>More Info</span>
  </button>
)

const Buttons = (props) => (
  <div className='Buttons'>
    <Play />
    {/* <MyList /> */}
    <MoreInfo />
  </div>
)

export default Buttons
