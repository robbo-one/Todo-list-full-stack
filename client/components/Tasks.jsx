import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteTask, fetchTasks, taskCompleteToggle, updateTask } from "../actions"
import Task from "./Task"
import { HashRouter as Router, Route } from "react-router-dom"
import ActiveTasks from "./ActiveTasks"
import CompletedTasks from "./CompletedTasks"

function Tasks(props) {
  const t = props.tasks
  // console.log(t)

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
      {/* THIS SHIT IS SO JANKY FIX IT LATER I GUESS I DUNNO SOMEONE HELP */}
        {t.map((task) => {
          //show tasks
          return ( 
            <Router key={task.id}>
              <Route
                path="/"
                exact
                component={() => (
                  <Task
                    task={task}
                    deleteClickHandler={deleteClickHandler}
                    doubleClickHandler={doubleClickHandler}
                    keyDownHandler={keyDownHandler}
                    toggleClickHandler={toggleClickHandler}
                  />

                )}
              />
              <Route
                path="/active"
                exact
                component={() => (
                  <ActiveTasks
                    task={task}
                    deleteClickHandler={deleteClickHandler}
                    doubleClickHandler={doubleClickHandler}
                    keyDownHandler={keyDownHandler}
                    toggleClickHandler={toggleClickHandler}
                  />
                  
                )}
              />
              <Route
                path="/completed"
                exact
                component={() => (
                  <CompletedTasks
                    task={task}
                    deleteClickHandler={deleteClickHandler}
                    doubleClickHandler={doubleClickHandler}
                    keyDownHandler={keyDownHandler}
                    toggleClickHandler={toggleClickHandler}
                  />
                )}
              />
            </Router>
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
