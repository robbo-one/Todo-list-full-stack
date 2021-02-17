import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TasksList from './Tasks'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <TasksList />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
