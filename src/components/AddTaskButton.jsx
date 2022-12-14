import React from "react"
import styled from "styled-components"
import { ThemeColor } from "../config/configTheme"

const Button = styled.button`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : ThemeColor.btn.background};
  width: 129px;
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #7f56d9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  user-select: none;

  &:hover {
    box-shadow: 0px 10px 39px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: 2px;
  }

  &:active {
    outline: 1px solid #fff;
    outline-offset: 2px;
    transform: scale(1.1);
    transition: 0.35s cubic-bezier(0.175, 0.885, 0.32, 0.2);
  }

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
    &:active {
      transform: scale(1);
    }
  }
`

function AddTaskButton({
  bgColor,
  onClick,
  disabled,
  type = "button",
  onSubmit
}) {
  return (
    <Button
      type={type}
      bgColor={bgColor}
      onClick={() => {
        onClick && onClick()
      }}
      onSubmit={() => onSubmit && onSubmit()}
      disabled={disabled}
    >
      Add task <i className="fa-solid fa-plus"></i>
    </Button>
  )
}

export default AddTaskButton
