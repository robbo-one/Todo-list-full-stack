import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'
import DeleteTodos from './DeleteTodos'
import UpdateTodos from './UpdateTodos'

function ShowCompleted () {

  // const [refresh, setRefresh] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTodos()
    .then(remoteTodos => setTasks(remoteTodos))
    .catch(err => setError(err.message))
  }, [])

  return (
    <>
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
      {tasks.map(task => {
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

export default ShowCompleted
