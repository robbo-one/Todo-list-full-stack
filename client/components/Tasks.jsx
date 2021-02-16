import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteTask, taskCompleteToggle, updateTask } from "../actions"


function Tasks(props) {
  const t = props.tasks

  const deleteClickHandler = (id) => {
    props.dispatch(deleteTask(id))
  }

  const doubleClickHandler = (evt) => {
    evt.target.parentNode.parentNode.className = "editing"
  }

  const keyDownHandler = (evt, id) => {
    if (evt.keyCode == 13) {
      //enter
      props.dispatch(updateTask(id, evt.target.value))
      evt.target.value = ""
      evt.target.parentNode.className = ""
    }
    if (evt.keyCode == 27) {
      //escape
      evt.target.value = ""
      evt.target.parentNode.className = ""
    }
  }

  const toggleClickHandler = (id, completedStatus) => {
    props.dispatch(taskCompleteToggle(id, completedStatus))
  }


  return (
    <>
      <ul className="todo-list">
        {t.map((task) => {
          //show tasks
          return (
            <li
              key={task.id}
              className={task.completed == "yes" ? "completed" : ""}
            >
              <div className="view">
                <input readOnly
                  className="toggle"
                  type="checkbox"
                  onClick={() => toggleClickHandler(task.id, task.completed)} //toggle complete
                  checked={task.completed == "yes"}
                />
                <label onDoubleClick={doubleClickHandler}>{task.task}</label>
                <button
                  className="destroy"
                  onClick={() => deleteClickHandler(task.id)} //delete task
                ></button>
              </div>
              <input
                className="edit"
                placeholder={task.task}
                onKeyDown={(evt) => keyDownHandler(evt, task.id)} //edit task
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(Tasks)
