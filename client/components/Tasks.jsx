import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteTask, taskCompleteToggle, updateTask } from "../actions"
import Task from "./Task"


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
            <Task task={task} key={task.id} deleteClickHandler={deleteClickHandler} doubleClickHandler={doubleClickHandler} keyDownHandler={keyDownHandler} toggleClickHandler={toggleClickHandler}/>
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
