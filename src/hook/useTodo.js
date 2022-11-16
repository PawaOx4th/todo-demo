import React, { useContext, useEffect, useState } from "react"
import { TodoContext } from "../context/todoContext"

export default function useTodo() {
  const context = useContext(TodoContext)
  return context
}
