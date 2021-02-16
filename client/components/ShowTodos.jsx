import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'
import DeleteTodos from './DeleteTodos'
import UpdateTodos from './UpdateTodos'

function ShowTodos () {

  // const [refresh, setRefresh] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTodos()
    .then(remoteTodos => setTasks(remoteTodos))
    .catch(err => setError(err.message))
  }, [])

  return (
    <>
        <ul className="todo-list">
      {tasks.map(task => {
          return (
              <li className="new-todo" key={task.id}><UpdateTodos todo={task}/>{task.task_details}<DeleteTodos todo={task}/></li>
              
              )
            })}
            </ul>
    </>
  )
}

export default ShowTodos
