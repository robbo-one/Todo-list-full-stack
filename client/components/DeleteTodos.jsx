import React, { useEffect, useState } from 'react'
import { deleteTodo } from '../apis'


function DeleteTodos (props) {
  const todo = props.todo
//   console.log(todo)
  // const [refresh, setRefresh] = useState(false)
  const [todoDelete, setTodoDelete] = useState({id:74})
  
  useEffect(() => {

  }, [])

  const doDelete = () => {
      if(todo.id == todoDelete.id) {
          deleteTodo(todo)
      }
  }

  const handleDelete = (e) => {
    console.log(e.target)
    
    // setTodoDelete()
  }


  return (
      //delete
    <button className="destroy" onClick={(e) => handleDelete(e, todoDelete.id)}></button>
  )
}

export default DeleteTodos
