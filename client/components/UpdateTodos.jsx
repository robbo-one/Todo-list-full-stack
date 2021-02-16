import React, { useEffect, useState } from 'react'
import { deleteTodo } from '../apis'


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

  const handleUpdate = (e) => {
    console.log(e.target)
    // setTodoUpdate()
  }


  return (
    <div className="view">
        <input className="toggle" type="checkbox"
            onClick={(e) => handleUpdate(e)} />
             {/* //, task.id, task.completed)} //toggle complete */}
    </div>
      
  )
}

export default UpdateTodos
