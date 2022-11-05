import React, { useState } from "react"
import { randomNumber } from "../utils/randomNumber"

function Lottery() {
  const [lottery, setLottery] = useState([1, 2, 3, 4, 5, 6])

  const handleRandomLottery = () => {
    const newLottery = Array.from({ length: 6 }, () => {
      return randomNumber()
    })

    setLottery(newLottery)
  }
  return (
    <>
      <div style={{ border: "1px solid #fff" }}>
        {lottery.map((item, index) => {
          return (
            <span className="content" key={index}>
              {item}
            </span>
          )
        })}
      </div>
      <button className="btn" onClick={() => handleRandomLottery()}>
        Random
      </button>
    </>
  )
}

export default Lottery
