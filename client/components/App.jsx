import React, { useEffect } from 'react'
import AddTodos from './AddTodo'
import TodoList from './AddTodoList'
function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodos />
      </header>
      <TodoList/>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
