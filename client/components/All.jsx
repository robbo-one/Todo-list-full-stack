import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

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
      <ShowTodos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default connect()(All)
