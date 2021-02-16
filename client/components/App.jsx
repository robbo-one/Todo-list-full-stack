import React, { useEffect, useState } from 'react'
import { fetchTodos } from '../actions'
import AddTodo from './AddTodo'
// import DeleteTodos from './DeleteTodos'
import Footer from './Footer'
import ShowTodos from './ShowTodos'
import { connect } from 'react-redux'
// import UpdateTodos from './UpdateTodos'
import { Route } from 'react-router-dom'
import All from './All'
import Active from './Active'
import Completed from './Completed'

function App (props) {
  
  // const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])



  return (
    <>
      <Route path="/" exact component={All}/>
      <Route path="/active" exact component={Active}/>
      <Route path="/completed" exact component={Completed}/>
    </>
  )
}

export default connect()(App)
