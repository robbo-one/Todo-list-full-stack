import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTask } from "../actions"

function Footer(props) {
  const t = props.tasks

  const [selected, setSelected] = useState("All")

  const checkIfCompletedItemExists = () => {
    return t.find((task) => task.completed == "yes")
  }

  const clearCompleted = () => {
    t.map((task) => {
      if (task.completed == "yes") {
        return props.dispatch(deleteTask(task.id))
      }
    })
  }

  return (
    <>
      {t.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{t.length}</strong> items left
          </span>
  
          <ul className="filters">
            <li>
              <a
                className={selected == "All" ? "selected" : ""}
                href="#/"
                onClick={() => setSelected("All")}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={selected == "Active" ? "selected" : ""}
                href="#/active"
                onClick={() => setSelected("Active")}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={selected == "Completed" ? "selected" : ""}
                href="#/completed"
                onClick={() => setSelected("Completed")}
              >
                Completed
              </a>
            </li>
          </ul>
          {checkIfCompletedItemExists() && (
            <button className="clear-completed" onClick={clearCompleted}>
              Clear completed
            </button>
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
