import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'
import DeleteTodos from './DeleteTodos'
import UpdateTodos from './UpdateTodos'
import { connect } from 'react-redux'

function ShowActive (props) {

  const [activeTodos, setActiveTodos] = useState([])


  useEffect(() => {
    setActiveTodos(currentActiveTodos => {
      return props.todos.filter(todo => {
        return todo.completed == 0
        })
    })
  }, [])

  return (
    <>
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
      {activeTodos.map(task => {
          return (
              <li className={task.completed == 1 ? "completed" : ""} 
              key={task.id}>
              <UpdateTodos todo={task}/><DeleteTodos todo={task}/>
              </li>
              )
            })}
            </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(ShowActive)
