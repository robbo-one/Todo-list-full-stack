import React, { useRef } from "react"
import { connect } from 'react-redux'

function Task(props) {

  const task = props.task
  const inputEl = useRef(null)

  const doubleClickHandler = (evt) => {
    evt.target.parentNode.parentNode.className = "editing"
    inputEl.current.focus()
  }

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
        <label onDoubleClick={doubleClickHandler}>{task.task}</label>
        <button
          className="destroy"
          onClick={() => props.deleteClickHandler(task.id)} //delete task
        ></button>
      </div>
      <input
        className="edit"
        ref={inputEl} 
        // placeholder={task.task}
        defaultValue={task.task}
        onKeyDown={(evt) => props.keyDownHandler(evt, task.id)} //edit task
      />
    </li>
  )
}



export default connect()(Task)
