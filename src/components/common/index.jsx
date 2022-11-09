import { ThemeColor } from "../../config/configTheme"
import styled from "styled-components"

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

export const ButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
`
