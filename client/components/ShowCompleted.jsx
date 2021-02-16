import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'
import DeleteTodos from './DeleteTodos'
import UpdateTodos from './UpdateTodos'
import { connect } from 'react-redux'

function ShowCompleted (props) {

  // const [refresh, setRefresh] = useState(false)
  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {
    setCompletedTodos(currentActiveTodos => {
      return props.todos.filter(todo => {
        return todo.completed == 1
        })
    })
  }, [])

  return (
    <>
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
      {completedTodos.map(task => {
          return (
              <li className={task.completed == 1 ? "completed" : ""} 
              key={task.id}>
              <UpdateTodos todo={task}/><DeleteTodos todo={task}/>
              </li>
              
              )
            })}
            </ul>
      
      {/* <Footer /> */}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(ShowCompleted)
