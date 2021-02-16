import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ShowActive from './ShowActive'
// import {fetchTodos} from '../actions'


function Active (props) {
  




  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowActive />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default connect()(Active)
