import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"

export const ListWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
  padding: 2rem;
`

function ListContent({ data, onUpdatedTodo }) {
  return (
    <ListWrapper>
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
