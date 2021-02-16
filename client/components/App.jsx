import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import Tasks from './Tasks'
import ToggleAll from './ToggleAll'
// import { HashRouter as Router, Route } from 'react-router-dom'

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
        <ToggleAll/>
          <Tasks />
      </section>
      <Footer/>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    tasks : globalState.tasks
  }
}

export default connect(mapStateToProps)(App)

