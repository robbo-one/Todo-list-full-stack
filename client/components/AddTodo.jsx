import React,{ useState } from 'react'
import { connect } from "react-redux"
import { newTask } from '../actions/index'


function AddTodo (props) {
const [task, setTask] = useState ('test')

const changeHandler = (event) => {
  setTask(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.dispatch(newTask(task, 'medium' ))
}

  return (
    <>
    <form  onSubmit={handleSubmit}>
      <input className="new-todo" value={task} onChange={(event)=> changeHandler(event)} placeholder="What needs to be done?" autoFocus={true} />
      </form>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks
  }
}
export default connect(mapStateToProps)(AddTodo)
