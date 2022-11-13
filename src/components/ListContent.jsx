import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"

export const ListWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
  padding: 2rem;
`

function ListContent({ data }) {
  return (
    <ListWrapper>
      <ul>
        {data &&
          data.map((todo, index) => {
            return <ListItem key={todo.id}>{todo.content}</ListItem>
          })}
      </ul>
    </ListWrapper>
  )
}

export default ListContent
