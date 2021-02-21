import React from 'react'
import { connect } from 'react-redux'
import { newTask } from '../actions'

const AddTodo = props => {

  const keyHandler = event => {
    if(event.keyCode == 13) {
      props.dispatch(newTask(event.target.value, 1))
      event.target.value = ''
    }
  }

  return (
    <>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus={true} 
        onKeyDown={keyHandler} 
      />
    </>
  )
}

export default connect()(AddTodo)
