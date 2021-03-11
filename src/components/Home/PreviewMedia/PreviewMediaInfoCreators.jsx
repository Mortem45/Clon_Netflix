import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewMediaInfoCreators.css'

const Name = ({ name }) => (
  <span className='PreviewMediaInfoCreators__Item'>
    <a className='' href=''>{name},&nbsp;</a>
  </span>
)

const Data = ({ title, children }) => (
  <p className='PreviewMediaInfoCreators creators'>
    <span className='PreviewMediaInfoCreators__Label'>
      {title}
    </span>
    <span className='PreviewMediaInfoCreators__Item'>
      {children}
    </span>
  </p>
)

const PreviewMediaInfoCreators = ({ info }) => (
  <div className='PreviewMediaInfoCreators__Container'>
    {
      (
        (info.starring && info.starring.length > 0)
          ? <Data title={'Starrings:'}>
            {
              info.starring.map(name => {
                return (
                  <Name key={name._id} name={name.name} />
                )
              })
            }
          </Data>
          : (info.creators ? <Data title={'Creators:'} names={info.starring} /> : <div />)
      )
    }
    {
      (
        (info.genres && info.genres.length > 0)
          ? <Data title={'Genres:'}>
            {
              info.genres.map(genre => {
                return (
                  <Name key={genre._id} name={genre.name} />
                )
              })
            }
          </Data>
          : <div>asd</div>
      )
    }
  </div>
)

export default PreviewMediaInfoCreators
