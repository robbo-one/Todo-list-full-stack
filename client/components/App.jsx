import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' 

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import Nav from './Nav'
import Register from './Register'


function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <Router>
        <Route path='/' component={Nav} />
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
          <Route path='/' exact component={TodoList} />  
          <Route path='/signup' component={Register} />      
        </section>
        <footer className="footer">
          <Route path='/' component={Footer} />
        </footer>
      </Router>
    </>
  )
}

export default App
