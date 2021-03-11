import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewMediaInfoWatched.css'

// TODO  Falta props de los videos

const PreviewMediaInfoWatched = ({ duration, title, type }) => {

  return (
    <div className='PreviewMediaInfoWatched'>
      <div className='PreviewMediaInfoWatched__EpisodioTitle episodeTitle'>
        <b>
          <span>
            <b>{title}</b>
          </span>
        </b>
      </div>
      <div className='PreviewMediaInfoWatched__Progress progress '>
        <span className='PreviewMediaInfoWatched__Progress__Bar'>
          <span className='PreviewMediaInfoWatched__Progress__Progress' />
        </span>
        {type === 'movie' ? <span className='PreviewMediaInfoWatched__Summary'>{` 1 of ${duration}m`}</span> : <span />}
      </div>
    </div>
  )
}

export default PreviewMediaInfoWatched
