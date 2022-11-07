import React, { useState, useEffect } from "react"

export default function Example() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState(null)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((c) => {
  //       const result = c + 1
  //       console.log("🟢 :", result)
  //       return result
  //     })
  //   }, 1000)
  //   return () => clearInterval(intervalId)
  // }, [])

  // const onFetchData = async () => {
  //   const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const result = await reponse.json()
  //   setTodo(result)
  // }

  useEffect(() => {
    console.log(todo?.id ?? "🚨")
  }, [todo])

  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
    </div>
  )
}
