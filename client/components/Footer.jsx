import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTask, setFilter } from "../actions"

function Footer(props) {
  const t = props.tasks
  

  const [selected, setSelected] = useState(localStorage.getItem('filter'))
  // let selected = localStorage.getItem('filter')
  selected == undefined && setSelected(localStorage.setItem('filter', 'All'))

  const checkIfCompletedItemExists = () => {
    return t.find((task) => task.completed == "yes")
  }

  const findHowManyActiveTasksLeft = () => {
    return t.filter(task => task.completed == 'no')
  }

  const clearCompleted = () => {
    t.map((task) => {
      if (task.completed == "yes") {
        return props.dispatch(deleteTask(task.id))
      }
    })
  }

  const changeFilter = (f) => {
    localStorage.setItem('filter', f)
    setSelected(localStorage.getItem('filter'))
  }

  return (
    <>
      {t.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            {findHowManyActiveTasksLeft().length == 1 
            ? <><strong>1</strong> item left </>
            : <><strong>{findHowManyActiveTasksLeft().length}</strong> items left</>}
          </span>
  
          <ul className="filters">
            <li>
              <a
                className={selected == "All" ? "selected" : ""}
                href="#/"
                onClick={() => changeFilter('All')}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={selected == "Active" ? "selected" : ""}
                href="#/active"
                onClick={() => changeFilter('Active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={selected == "Completed" ? "selected" : ""}
                href="#/completed"
                onClick={() => changeFilter('Completed')}
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
