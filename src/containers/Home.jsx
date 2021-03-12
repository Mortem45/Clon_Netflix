import React, { Component, useState } from 'react'
import Container from 'enl-components/utils/Container'
import Header from 'enl-components/Home/Header'
import Main from 'enl-components/Home/Main'
import List from 'enl-components/Home/List'
import Hero from 'enl-components/Home/Hero'
import Media from 'enl-components/Home/Media'
import PreviewMedia from 'enl-components/Home/PreviewMedia'
import Background from 'enl-components/Home/PreviewMedia/Background'

import dat from '../api/dataHome.json'
import data from '../api/api.json'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [preview, setPreview] = useState({})

  const handlerOpenModal = (itemPrev, id) => {
    setShowModal(true)
    setPreview(itemPrev)
  }

  const handlerCloseModal = () => {
    setShowModal(false)
  }

  console.log(data);
  return (
    <Container>
      <Header header={dat.header} />
      <Main>
        <Hero heroDefault={dat.hero} />
        {
          (
            data !== undefined
              ? data.lists.map(list => {
                if (list.items.length > 0) {
                  return (
                    <List key={list.id} title={list.title} Preview={preview} showModal={false} handlerCloseModal={handlerCloseModal}>
                      {
                        list.items.map(media => {
                          return (
                            <Media key={media.id} {...media} handlerOpenModal={handlerOpenModal} />
                          )
                        })
                      }
                    </List>
                  )
                }
              })
              : <h1> LOADING </h1>
          )
        }
      </Main>
      {/* <Background /> */}
      {/* <PreviewMedia /> */}
    </Container>
  )

}

export default Home
