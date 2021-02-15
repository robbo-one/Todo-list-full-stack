import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteTask, taskCompleteToggle, updateTask } from "../actions"

// import { getTasks } from '../apis/tasks'
// import AddTodo from './AddTodo'

function Tasks(props) {
  const t = props.tasks

  const [allComplete, setAllComplete] = useState(false)

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

  const toggleAllClickHandler = () => {
    if(allComplete){
      t.map((task) => {
        return props.dispatch(taskCompleteToggle(task.id, "yes"))
      })
    } else {
      t.map((task) => {
        return props.dispatch(taskCompleteToggle(task.id, "no"))
      })
    }
    setAllComplete(!allComplete)
  }

  return (
    <>
      {t.length > 0 && ( //check if any tasks exist
        <div>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onClick={toggleAllClickHandler}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
      )}
      <ul className="todo-list">
        {t.map((task) => {
          //show tasks
          return (
            <li
              key={task.id}
              className={task.completed == "yes" ? "completed" : ""}
            >
              <div className="view">
                <input
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
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(Tasks)
