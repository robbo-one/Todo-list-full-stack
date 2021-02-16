import React, { useEffect, useState } from 'react'
import { deleteTodoAction } from '../actions'
// import { deleteTodo } from '../apis'
import { connect } from 'react-redux'


function DeleteTodos (props) {
  const todo = props.todo
//   console.log(todo)
  // const [refresh, setRefresh] = useState(false)
  // const [todoDelete, setTodoDelete] = useState(null)
  
  // useEffect(() => {

  // }, [])

  // const doDelete = () => {
  //     if(todo.id == todoDelete.id) {
  //         deleteTodo(todo)
  //     }
  // }

  const handleDelete = (e) => {
    // console.log(e.target)
    // deleteTodo(todo)
    props.dispatch(deleteTodoAction(todo))
    
    // setTodoDelete()
  }


  return (
      //delete
    <button className="destroy" onClick={(e) => handleDelete(e, todo)}></button>
  )
}

export default connect()(DeleteTodos)
