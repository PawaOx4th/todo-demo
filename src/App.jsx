import React from "react"
import styled from "styled-components"
import AddTaskButton from "./components/AddTaskButton"
import { ThemeColor } from "./config/configTheme"

export const Container = styled.div`
  background-color: ${ThemeColor.container.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

const ListWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: #fff;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
`

function App() {
  return (
    <Container>
      <ButtonWrapper>
        <AddTaskButton />
      </ButtonWrapper>
      <ListWrapper>
        <ul>
          <li>
            <input type="checkbox" />
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              exercitationem.
            </span>
          </li>
          <li>
            <input type="checkbox" />
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              exercitationem.
            </span>
          </li>
          <li>
            <input type="checkbox" />
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              exercitationem.
            </span>
          </li>
        </ul>
      </ListWrapper>
    </Container>
  )
}

export default App
