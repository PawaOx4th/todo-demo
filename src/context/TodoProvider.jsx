import React, { useState, useEffect } from "react"
import { TodoContext } from "./todoContext"
import http from "../config/axiosGlobalConfig"

function TodoProvider({ children }) {
  const [todos, setTodos] = useState()
  const [isLoading, setIsLoading] = useState(false)

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

  const onUpdatedTodo = async (id, status, rawData) => {
    try {
      setIsLoading(true)
      const { topic, content, priority, removeStatus } = rawData
      const newData = {
        topic,
        content,
        priority,
        removeStatus,
        status
      }

      await http.put(`/rest/card/${id}`, { ...newData })
      await onFetchData()
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    onFetchData()
  }, [])

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        onFetchData,
        onCreateNewTodo,
        onUpdatedTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
