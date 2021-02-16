import React from "react"
import { connect } from "react-redux"
import { deleteTask } from '../actions'

function Footer(props) {
  const t = props.tasks

  const checkIfCompletedItemExists = () => {
    return t.find((task) => task.completed == "yes")
  }

  const clearCompleted = () => {
    t.map(task => {
      if(task.completed == 'yes'){
        return props.dispatch(deleteTask(task.id))
      }
    })
  }

  return (
    <>
      {t.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{t.length}</strong> item left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {checkIfCompletedItemExists() && (
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
          )}
        </footer>
      )}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(Footer)
