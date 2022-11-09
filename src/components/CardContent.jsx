import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 1rem;
`

function CardContent() {
  return (
    <Container>
      <input type="checkbox" />
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
        exercitationem.
      </span>
    </Container>
  )
}

export default CardContent
