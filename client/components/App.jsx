import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import AddTodo from './AddTodo'
import ListOfTodos from './ListOfTodos'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <ListOfTodos/>
        <AddTodo/>

      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
