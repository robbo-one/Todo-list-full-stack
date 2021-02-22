import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todos from './Todos'
function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <Todos/>
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
