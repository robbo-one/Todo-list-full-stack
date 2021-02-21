import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import ListTodos from './ListTodos'

function App () {
  useEffect(() => {
    
  }, [])





  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <ListTodos />
      </header>
      <section className="main">
      </section>
      <footer className="footer"></footer>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos : globalState.todos
  }
}
export default connect(mapStateToProps)(App)
