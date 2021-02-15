import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteTask, taskCompleteToggle, updateTask } from "../actions"

// import { getTasks } from '../apis/tasks'
// import AddTodo from './AddTodo'

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
      // console.log(evt.target.value)
      props.dispatch(updateTask(id, evt.target.value))
      evt.target.value = ""
      evt.target.parentNode.className = ""
    }
    if (evt.keyCode == 27) {
      evt.target.value = ""
      evt.target.parentNode.className = ""
    }
  }

  const toggleClickHander = (id, completedStatus) => {
    props.dispatch(taskCompleteToggle(id, completedStatus))
  }

  return (
    <>
      <ul className="todo-list">
        {t.map((task) => {
          return (
            <li
              key={task.id}
              className={task.completed == "yes" ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={() => toggleClickHander(task.id, task.completed)}
                />
                <label onDoubleClick={doubleClickHandler}>{task.task}</label>
                <button
                  className="destroy"
                  onClick={() => deleteClickHandler(task.id)}
                ></button>
              </div>
              <input
                className="edit"
                placeholder={task.task}
                onKeyDown={(evt) => keyDownHandler(evt, task.id)}
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
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(Tasks)
