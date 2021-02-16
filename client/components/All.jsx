import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ShowTodos from './ShowTodos'
// import {fetchTodos} from '../actions'

function All (props) {
  



  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowTodos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default connect()(All)
