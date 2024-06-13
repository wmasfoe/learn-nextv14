'use client';

import { useEffect, useState, useRef } from "react"

export default function Page() {

  const [todos, setTodos] = useState([])
  const resetRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch('/api/todo')).json()
      setTodos(data)
    }
    fetchData()
  }, [])

  async function onSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/todo', {
      method: 'POST',
      body: new FormData(event.currentTarget),
    })

    const {data} = await response.json()
    setTodos(data)
    resetRef.current?.click()
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="todo" />
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <input ref={resetRef} type="reset" value="Reset"></input>
      </form>
      <hr/>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </>
  )
}
