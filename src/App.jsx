import React, { useState, useEffect } from "react"
import AddTaskButton from "./components/AddTaskButton"
import ListContent from "./components/ListContent"
import { ButtonWrapper, Container } from "./components/common"
import CreateTodoModal from "./components/CreateTodoModal"
import { ToastContainer } from "react-toastify"
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

  useEffect(() => {
    onFetchData()
  }, [])

  return (
    <Container customPadding="2rem 0">
      <ToastContainer />
      {isOpenModal && (
        <CreateTodoModal
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
