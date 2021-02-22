import React, { useEffect } from 'react'
import Todo from './Todo'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <Todo />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
