import React, { useState } from "react"
import AddTaskButton from "./components/AddTaskButton"
import ListContent from "./components/ListContent"
import { ButtonWrapper, Container } from "./components/common"
import CreateTodoModal from "./components/CreateTodoModal"

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <Container customPadding="2rem 0">
      {isOpenModal && (
        <CreateTodoModal
          onClose={() => {
            setIsOpenModal((prev) => !prev)
          }}
        />
      )}
      <ButtonWrapper>
        <AddTaskButton
          onClick={() => {
            setIsOpenModal((prev) => !prev)
          }}
        />
      </ButtonWrapper>
      <ListContent />
    </Container>
  )
}

export default App
