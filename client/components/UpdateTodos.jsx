import React, { useEffect, useState } from 'react'
import { deleteTodo, updateTodo } from '../apis'


function UpdateTodos (props) {
  const todo = props.todo
//   console.log(todo)
  // const [refresh, setRefresh] = useState(false)
  const [todoUpdate, setTodoUpdate] = useState(null)
  
  useEffect(() => {

  }, [])

  const doUpdate = () => {
      if(todo.id == todoUpdate.id) {
          deleteTodo(todo)
      }
  }

  const handleUpdate = (e, todo) => {
    console.log(e.target)
    setTodoUpdate(todo)
    updateTodo(todoUpdate)
  }


  return (
    <div className="view">
        <input className="toggle" type="checkbox"
            onChange={(e) => handleUpdate(e, todo)} 
            checked={todo.completed}/>
            <label>{props.todo.task_details}</label>
             {/* //, task.id, task.completed)} //toggle complete */}
    </div>
      
  )
}

export default UpdateTodos
