import React, { useState } from 'react'
import { connect } from 'react-redux'
import addTodo from '../apis/todos'

function AddTodo (props) {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.dispatch(AddTodo(newTodo))
    setNewTodo('')
  }

  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} 
    
      />
    </>
  ) 
}


export default connect() (AddTodo)
