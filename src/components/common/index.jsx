import { ThemeColor } from "../../config/configTheme"
import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  background-color: ${ThemeColor.container.background};
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: ${(props) => (props.customPadding ? props.customPadding : "0")};
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
`

export const Span = styled.span`
  color: #383f50;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: 400;
`
