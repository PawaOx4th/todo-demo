import React from "react"
import styled from "styled-components"
import CardContent from "./CardContent"

const Li = styled.li`
  list-style: none;
  width: 340px;
  min-height: 48px;
  padding: 1rem 0.5rem;
`

function ListItem() {
  return (
    <Li>
      <CardContent />
    </Li>
  )
}

export default ListItem
