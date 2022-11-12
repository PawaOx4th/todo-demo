import React, { useState } from "react"
import { useRef } from "react"
import styled from "styled-components"
import AddTaskButton from "./AddTaskButton"

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.form`
  background-color: #fff;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  padding: 24px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`

const FlagIcon = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid #e4e7ec;
  border-radius: 10px;
  display: grid;
  place-items: center;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
`

const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #d0d5dd;
  padding: 10px 14px;
`

function CreateTodoModal({ onClose }) {
  const [content, setContent] = useState("")

  const handleCreateNewTodo = (todoContent) => {
    console.log("🍟 todoContent :", todoContent)
  }

  return (
    <ModalWrapper>
      <ModalContent
        onSubmit={(e) => {
          e.preventDefault()
          handleCreateNewTodo(content)
        }}
      >
        <FlagIcon>
          <i className="fa-regular fa-flag"></i>
        </FlagIcon>
        <div>
          <h3>To do list</h3>
          <small>Please enter a task name to do.</small>
        </div>
        <label htmlFor="input-todo">
          <Input
            id="input-todo"
            type="text"
            placeholder="New Task"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <AddTaskButton
            type="submit"
            bgColor={"#7F56D9"}
            disabled={content.length <= 4}
          />
        </div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default CreateTodoModal
