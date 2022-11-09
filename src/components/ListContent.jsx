import React, { useEffect, useState, useLayoutEffect } from "react"
import ListItem from "./ListItem"
import styled from "styled-components"
import { MOCK_TODO } from "../example"
import axios from "axios"

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
      const response = await axios.get("/MOCK_DATA_TODO.json")
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
            return <ListItem key={todo.id}>{todo.content}</ListItem>
          })}
      </ul>
    </ListWrapper>
  )
}

export default ListContent
