import React from "react"
import AddTaskButton from "./components/AddTaskButton"
import ListContent from "./components/ListContent"
import { ButtonWrapper, Container } from "./components/common"

function App() {
  return (
    <Container>
      <ButtonWrapper>
        <AddTaskButton />
      </ButtonWrapper>
      <ListContent />
    </Container>
  )
}

export default App
