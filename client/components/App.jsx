import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import SelectTodos from './SelectTodos'


function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <>
        <AddTodo />
        <SelectTodos />
        
        </>
      </header>
      <section className="main">
        
      </section>
      <footer className="footer">
      </footer>
    </>
  )
}





export default App
