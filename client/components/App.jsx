import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import ListTodos from './ListTodos'
import Footer from './Footer'

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
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos : globalState.todos,
    filters: globalState.filters
  }
}
export default connect(mapStateToProps)(App)
