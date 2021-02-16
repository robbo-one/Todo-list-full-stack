import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../apis/api'

function AddTodo (props) {

  const keyHandler = (event) => {
    if(event.keyCode == 13) {
      props.dispatch(addTask(event.target.value))
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
