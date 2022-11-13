import React, { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import AddTaskButton from "./components/AddTaskButton"
import { ButtonWrapper, Container } from "./components/common"
import CreateTodoModal from "./components/CreateTodoModal"
import ListContent from "./components/ListContent"
import http from "./config/axiosGlobalConfig"

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleEscapeOnCloseModal = (event) => {
    if (event.code === "Escape") {
      setIsOpenModal(false)
    }
  }

  useEffect(() => {
    if (isOpenModal) {
      document.documentElement.style.overflowY = "hidden"
    }

    return () => {
      document.documentElement.style.overflowY = "auto"
    }
  }, [isOpenModal])

  useEffect(() => {
    document.addEventListener("keyup", handleEscapeOnCloseModal, false)

    return () => {
      document.removeEventListener("keyup", handleEscapeOnCloseModal, false)
    }
  }, [])

  const [todos, setTodos] = useState()

  const onFetchData = async () => {
    const response = await http.get("/rest/card/board")
    setTodos(response.data)
  }

  const onCreateNewTodo = async (newTodo) => {
    return await http.post("/rest/card", {
      ...newTodo
    })
  }

  useEffect(() => {
    onFetchData()
  }, [])

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
          onClick={() => {
            setIsOpenModal((prev) => !prev)
          }}
        />
      </ButtonWrapper>
      <ListContent data={todos} />
    </Container>
  )
}

export default App
