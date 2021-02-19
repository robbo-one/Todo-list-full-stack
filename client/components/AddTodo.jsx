import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchTodos, insertTodo } from '../actions'

function AddTodo(props) {

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      handleSubmit()
    }
  }
  const [newTodoText, setNewTodoText] = useState("")

  const handleChange = (e) => {
    setNewTodoText(e.target.value)
  }

  const handleSubmit = () => {
    props.dispatch(insertTodo(newTodoText))
  }


  return (
    <>
      <input id="addTodo" className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyPress={handleKeyPress} onChange={handleChange} />
    </>
  )
}

export default connect()(AddTodo)
