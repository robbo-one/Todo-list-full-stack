import React, {useState} from 'react'

import { connect } from 'react-redux'
import { fetchTodos, saveTodo } from '../actions'

function AddTodo (props) {

  const [ newTodo, setNewTodo ] = useState('')

const handleChange = (e) => {
  setNewTodo(e.target.value)
}
  
const keyPressed = (e) => {
  if (e.key === 'Enter') {
    handleSubmit(e)
  }
}

const handleSubmit = (e) => {
  e.target.value = ''
  props.dispatch(saveTodo(newTodo))
    .then (() => {
      props.dispatch(fetchTodos())
    })
}


  return (
    <>
      <input className="new-todo" 
      placeholder="What needs to be done?" 
      autoFocus={true} 
      onChange={handleChange}
      onKeyPress={keyPressed}
      />
      
    </>
  )
}

export default connect()(AddTodo)
