import http from "../config/axiosGlobalConfig"
import React, { useEffect, useState } from "react"

export default function useTodo() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [todos, setTodos] = useState()

  const onFetchData = async () => {
    const response = await http.get("/rest/card/board")
    const result = [...response.data].sort((todoA, todoB) => {
      return (
        new Date(todoB.createdTimestamp).getTime() -
        new Date(todoA.createdTimestamp).getTime()
      )
    })

    setTodos(result)
  }

  const onCreateNewTodo = async (newTodo) => {
    return await http.post("/rest/card", {
      ...newTodo
    })
  }

  useEffect(() => {
    onFetchData()
  }, [])

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

  return {
    isOpenModal,
    setIsOpenModal,
    todos,
    setTodos,
    onFetchData,
    onCreateNewTodo,
    handleEscapeOnCloseModal
  }
}
