import React from 'react'
import ListContainer from './List/ListContainer'
import ListTitle from './List/ListTitle'
import ListContent from './List/ListContent'

const List = ({ title, children, Preview, showModal, handlerCloseModal }) => {
  return (
    <ListContainer>
      <ListTitle title={title} />
      <ListContent showModal={Preview} clss={showModal ? 'Show' : 'Hiden'} handlerCloseModal={handlerCloseModal}>
        {children}
      </ListContent>
    </ListContainer>
  )
}

export default List
