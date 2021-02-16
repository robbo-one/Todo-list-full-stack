import React from "react"
import { deleteTask, taskCompleteToggle, updateTask } from "../actions"
import { connect } from 'react-redux'

function Task(props) {

  const task = props.task
  // console.log(task)

  // const deleteClickHandler = (id) => {
  //   props.dispatch(deleteTask(id))
  // }

  // const doubleClickHandler = (evt) => {
  //   evt.target.parentNode.parentNode.className = "editing"
  // }

  // const keyDownHandler = (evt, id) => {
  //   if (evt.keyCode == 13) {
  //     //enter
  //     props.dispatch(updateTask(id, evt.target.value))
  //     evt.target.value = ""
  //     evt.target.parentNode.className = ""
  //   }
  //   if (evt.keyCode == 27) {
  //     //escape
  //     evt.target.value = ""
  //     evt.target.parentNode.className = ""
  //   }
  // }

  // const toggleClickHandler = (id, completedStatus) => {
  //   props.dispatch(taskCompleteToggle(id, completedStatus))
  // }

  return (
    <li key={task.id} className={task.completed == "yes" ? "completed" : ""}>
      <div className="view">
        <input
          readOnly
          className="toggle"
          type="checkbox"
          onClick={() => props.toggleClickHandler(task.id, task.completed)} //toggle complete
          checked={task.completed == "yes"}
        />
        <label onDoubleClick={props.doubleClickHandler}>{task.task}</label>
        <button
          className="destroy"
          onClick={() => props.deleteClickHandler(task.id)} //delete task
        ></button>
      </div>
      <input
        className="edit"
        placeholder={task.task}
        onKeyDown={(evt) => props.keyDownHandler(evt, task.id)} //edit task
      />
    </li>
  )
}

export default connect()(Task)
