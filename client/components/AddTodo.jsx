import React from "react"
import { connect } from "react-redux"
import { addTask } from "../actions"

function AddTodo(props) {
  
  const keyHandler = (evt) => {
    if (evt.keyCode == 13) {
      props.dispatch(addTask(evt.target.value, 1))
      evt.target.value = ""
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
