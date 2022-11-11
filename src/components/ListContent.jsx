import React, { useEffect, useState, useLayoutEffect } from "react"
import ListItem from "./ListItem"
import styled from "styled-components"
import { MOCK_TODO } from "../example"
import axios from "axios"
import http from "../config/axiosGlobalConfig"

export const ListWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
`

function ListContent() {
  const [todos, setTodos] = useState()

  useEffect(() => {
    let clear = false
    const onFetchData = async () => {
      const response = await http.get("/todos")
      !clear && setTodos(response.data)
    }

    onFetchData()

    return () => {
      clear = true
    }
  }, [])

  return (
    <ListWrapper>
      <ul>
        {todos &&
          todos.map((todo, index) => {
            return <ListItem key={todo.id}>{JSON.stringify(todo)}</ListItem>
          })}
      </ul>
    </ListWrapper>
  )
}

export default ListContent
