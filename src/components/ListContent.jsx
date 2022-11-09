import React from "react"
import ListItem from "./ListItem"
import styled from "styled-components"

export const ListWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: #fff;
`

function ListContent() {
  return (
    <ListWrapper>
      <ul>
        <ListItem />
        {/* <ListItem />
        <ListItem /> */}
      </ul>
    </ListWrapper>
  )
}

export default ListContent
