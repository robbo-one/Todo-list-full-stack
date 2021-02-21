import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'

const App = () => {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <ListTodos />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
