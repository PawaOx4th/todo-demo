import React from "react"
import AddTaskButton from "./components/AddTaskButton"
import ListContent from "./components/ListContent"
import { ButtonWrapper, Container } from "./components/common"

function App() {
  console.log("ENV:", process.env.REACT_APP_PROJECT_NAME)
  console.log("ENV NOT START WITH REACT:", process.env.PROJECT_NAME)

  return (
    <Container customPadding="2rem 0">
      <ButtonWrapper>
        <AddTaskButton />
      </ButtonWrapper>
      <ListContent />
    </Container>
  )
}

export default App
