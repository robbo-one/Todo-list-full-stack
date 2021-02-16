import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        </header>
      <section className="main"></section>
      <footer className="footer">This is a footer, cheers</footer>
    </>
  )
}

export default App
