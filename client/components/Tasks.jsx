import React, { useEffect, useState } from 'react'
import { getTasks } from '../apis/tasks'
// import AddTodo from './AddTodo'

function Tasks () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
    .then((list) => {
      setTasks(...tasks, list)
    })

  }, [])

  const handleChange = (evt) => {
    
  }


  return (
    <>
      <ul className="todo-list">
        {tasks.map(task => {
          // console.log(task.task)
          return (
            <li key={task.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{task.task}</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web" onChange={handleChange}/>
          </li>
        )
        })}
      </ul>
    </>
  )
}

export default Tasks
