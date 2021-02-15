import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Tasks from './Tasks'

function App (props) {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        {props.tasks.length > 0 && (
        <div><input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label></div>)}
        <Tasks />
      </section>
      <footer className="footer"></footer>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    tasks : globalState.tasks
  }
}

export default connect(mapStateToProps)(App)
// export default App

