import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTask } from "../actions"

function Footer(props) {
  const t = props.tasks

  // const [active, setActive] = useState(['selected', '', ''])
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

  // const handleSelect = (element) => {
  //   if(element == 1){
  //     setActive(['selected', '', ''])
  //   } else if(element == 2){
  //     setActive(['', 'selected', ''])
  //   } else if(element == 3) {
  //     setActive(['', '', 'selected'])
  //   }
  // }

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
