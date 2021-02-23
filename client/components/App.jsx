import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import List from './List'
import { fetchTasks } from '../actions/actions'
import { connect } from 'react-redux'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  return (
    <>
      <header className="header">
        <h1>To Do</h1>
        <AddTodo />
        <List />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks,
  }
}


export default connect(mapStateToProps)(App)
