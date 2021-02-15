import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'

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
      {tasks.map(task => {
          return (
          <ul className="todo-list">
              <li className="new-todo"key={task.id}>{task.task_details}</li>
          </ul>
          )
      })}
    </>
  )
}

export default ShowTodos
