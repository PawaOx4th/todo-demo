import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import Lottery from "./components/Lottery"

function App() {
  return (
    <div className="container">
      <Lottery />
      <Lottery />
      <Lottery />
      <Lottery />
      <Lottery />
    </div>
  )
}

export default App
