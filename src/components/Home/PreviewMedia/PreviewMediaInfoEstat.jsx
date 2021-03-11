import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewMediaInfoEstat.css'

const PreviewMediaInfoEstat = ({ info }) => {
  const { maturity_rating, score, year, season_list } = info

  const hours = Math.floor(info.duration / 60)
  const minutes = info.duration % 60
  const seasons = season_list || []
  const duration = (season_list ? `${seasons.length} Seasons` : `${hours}h ${minutes}m`)

  return (
    <div className='PreviewMediaInfoEstat__Container'>
      <span className='PreviewMediaInfoEstat__Score__Wraper'>
        <div className='PreviewMediaInfoEstat__Score__Match'>
          <span className='PreviewMediaInfoEstat__Score match-score'>{score}% Match</span>
        </div>
      </span>
      <span>{year}</span>
      <span className='PreviewMediaInfoEstat__Madurity'>
        <span className='PreviewMediaInfoEstat__Madurity__Num'>{maturity_rating}+</span>
      </span>
      <span>{duration}</span>
    </div>
  )
}

export default PreviewMediaInfoEstat
