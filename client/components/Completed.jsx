import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ShowCompleted from './ShowCompleted'

function All (props) {
  
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])



  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowCompleted />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default connect()(All)
