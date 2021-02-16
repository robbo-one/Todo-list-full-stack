import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Footer from './Footer'


function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <Todos />
        <Footer />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
