import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import ShowTodos from './ShowTodos'

function App () {
  
  // const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {

  }, [])



  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowTodos />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
