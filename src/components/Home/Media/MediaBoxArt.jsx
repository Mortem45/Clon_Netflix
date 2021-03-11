import React from 'react'
import MediaIconRow from './MediaIconRow'
import 'enl-styles/Home/Media/MediaBoxArt.css'

const MediaBoxArt = ({ image }) => (
  <div className='MediaBox'>
    <a>
      <div className='MediaBoxArt'>
        <img className='MediaBoxArt__Image' src="https://occ-0-2296-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZhhv_b4I6eAR3GCi1V_LUjI9ucXeLP85nHBvRwsn0oZ9KHkx1bkArw9E3Tl2cbhW_uegk4dBrwEOBB7i58uV5UZD7ipiIcRa7OUBpTAp-P9CPhnikjhdpT9RJR_.jpg?r=909" alt='' />
        <div className='MediaBoxArt__Text__Container'>
          {/* <p className='MediaBoxArt__Text'>
            {text}
          </p> */}
        </div>
      </div>
      {/* <MediaIconRow /> */}
    </a>
  </div>
)

export default MediaBoxArt
