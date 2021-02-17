import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions'

function AddTodo (props) {
  const [newTodo, setNewTodo] = useState('')
  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault() 
    props.dispatch(createTodo(newTodo))
    setNewTodo('')
  }
  return (
  <>
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onChange={handleChange} value={newTodo} /> 
     
      </form>
  </>
  ) 
}
export default connect() (AddTodo)
