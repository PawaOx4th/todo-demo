import { createContext } from "react"

export const TodoContext = createContext({
  todos: null,
  isLoading: false,
  onFetchData: () => {},
  onCreateNewTodo: () => {},
  onUpdatedTodo: () => {}
})
