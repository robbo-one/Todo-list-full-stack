import React from "react"
import { connect } from "react-redux"
import { addTask, fetchTasks } from "../actions"

function AddTodo(props) {
  
  const keyHandler = (evt) => {
    if (evt.keyCode == 13) {
      if(evt.target.value == ''){
        evt.target.placeholder = "mate, you gotta have something to do"
      } else {
        props.dispatch(addTask(evt.target.value, 1))
        evt.target.value = ""
      }
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
