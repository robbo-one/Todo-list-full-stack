import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import Tasks from './Tasks'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <Tasks />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
