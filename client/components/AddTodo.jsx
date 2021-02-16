import React, {useState} from 'react'

import { connect } from 'react-redux'
import { fetchTodos, saveTodo } from '../actions'

function AddTodos (props) {
  const [ todo, setNewTodo ] = useState('')

const handleChange = (e) => {
  setNewTodo(e.target.value)
}
  
const keyPressed = (e) => {
  if (e.key === 'Enter') {
    handleSubmit(e)
  }
}

const handleSubmit = (e) => {
  props.dispatch(saveTodo(todo))
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

export default connect()(AddTodos)
