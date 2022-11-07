import React from "react"
import styled from "styled-components"

export const Container = styled.div`
  background-color: #8c64e6;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <h1>Hello 🦐</h1>
    </Container>
  )
}

export default App
