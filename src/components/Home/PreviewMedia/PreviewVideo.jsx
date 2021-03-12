import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewVideo.css'

const PreviewVideo = ({ children }) => (
  <div className='PreviewVideoContainer' >
    <div className='PreviewVideoContainer2' >
      <video className='PreviewVideo'src='http://www.peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'></video>
    </div>
  </div>
)

export default PreviewVideo
