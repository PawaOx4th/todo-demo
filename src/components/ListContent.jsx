import React, { useContext } from "react"
import styled from "styled-components"
import ListItem from "./ListItem"
import { TodoContext } from "../context/todoContext"

export const ListWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
  padding: 2rem;
`

function ListContent({ data, onUpdatedTodo, disabled }) {
  const counterContext = useContext(TodoContext)

  return (
    <ListWrapper>
      <h1>{counterContext.counter}</h1>
      <ul>
        {data &&
          data.map((todo, index) => {
            return (
              <ListItem
                key={todo.id}
                status={todo.status}
                onUpdatedTodo={onUpdatedTodo}
                id={todo.id}
                data={todo}
                disabled={disabled}
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
