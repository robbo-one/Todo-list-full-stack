import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchTodos, insertTodo } from '../actions'

function AddTodo(props) {

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      handleSubmit(e)
    }
  }
  const [newTodoText, setNewTodoText] = useState("")

  const handleChange = (e) => {
    setNewTodoText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.target.value = ""
    props.dispatch(insertTodo(newTodoText))
    .then(()=>{
      props.dispatch(fetchTodos());
      setNewTodoText("")
    })
  }


  return (
    <>

      <input id="addTodo" className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyPress={handleKeyPress} onChange={handleChange} />

      
    </>
  )
}

export default connect()(AddTodo)
