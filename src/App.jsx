import React, { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import AddTaskButton from "./components/AddTaskButton"
import { ButtonWrapper, Container } from "./components/common"
import CreateTodoModal from "./components/CreateTodoModal"
import ListContent from "./components/ListContent"

import useTodo from "./hook/useTodo"

function App() {
  const {
    isOpenModal,
    setIsOpenModal,
    onCreateNewTodo,
    onFetchData,
    todos,
    handleEscapeOnCloseModal,
    onUpdatedTodo,
    isLoading
  } = useTodo()

  return (
    <Container customPadding="2rem 0">
      <ToastContainer />
      {isOpenModal && (
        <CreateTodoModal
          onCreateNewTodo={onCreateNewTodo}
          onFetchData={onFetchData}
          onClose={() => {
            setIsOpenModal((prev) => !prev)
          }}
        />
      )}
      <ButtonWrapper>
        <AddTaskButton
          disabled={isLoading}
          onClick={() => {
            setIsOpenModal((prev) => !prev)
          }}
        />
      </ButtonWrapper>
      <ListContent
        data={todos}
        onUpdatedTodo={onUpdatedTodo}
        disabled={isLoading}
      />
    </Container>
  )
}

export default App
