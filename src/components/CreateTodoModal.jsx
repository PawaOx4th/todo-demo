import React from "react"
import styled from "styled-components"

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

const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  padding: 24px;
`

function CreateTodoModal() {
  return (
    <ModalWrapper>
      <ModalContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt
        odit sequi optio quibusdam amet minus aut corrupti velit vero!
      </ModalContent>
    </ModalWrapper>
  )
}

export default CreateTodoModal
