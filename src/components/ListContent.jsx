import React, { useContext } from "react"
import styled from "styled-components"
import ListItem from "./ListItem"
import { TodoContext } from "../context/todoContext"
import useTodo from "../hook/useTodo"

export const ListWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
  padding: 2rem;
`

function ListContent() {
  const { todos, onUpdatedTodo, isLoading } = useTodo()

  return (
    <ListWrapper>
      <ul>
        {todos &&
          todos.map((todo, index) => {
            return (
              <ListItem
                key={todo.id}
                status={todo.status}
                onUpdatedTodo={onUpdatedTodo}
                id={todo.id}
                data={todo}
                disabled={isLoading}
              >
                {todo.content}
              </ListItem>
            )
          })}
      </ul>
    </ListWrapper>
  )
}

export default ListContent
