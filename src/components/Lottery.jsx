import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

function Lottery({ defaultNumber, onRandomNumber, borderColor }) {
  const [lottery, setLottery] = useState([])
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(false)

  const handleRandomLottery = () => {
    const newLottery = Array.from({ length: 6 }, () => {
      return onRandomNumber()
    })
    setLottery(newLottery)
  }

  useEffect(() => {
    setInterval(() => {
      setShow(true)
    }, 1000)

    return () => {}
  }, [])

  return (
    <>
      <div style={{ border: `2px solid ${borderColor ?? "#fff"}` }}>
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

Lottery.propTypes = {
  defaultNumber: PropTypes.arrayOf(PropTypes.number).isRequired,
  onRandomNumber: PropTypes.func.isRequired,
  borderColor: PropTypes.string
}

export default Lottery
