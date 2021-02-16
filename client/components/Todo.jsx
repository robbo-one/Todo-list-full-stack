import React, { useState } from 'react'
import { connect } from 'react-redux'

import { changeTodo, fetchTodos, removeTodo } from '../actions'


const Todo = (props) => {
  const todo = props.todo
  const [ isEditing , setIsEditing ] = useState(false) 
  const [ editTodo , setEditTodo] = useState('')

  const handleDestroy = (id) => {
    props.dispatch(removeTodo(id))
      .then(() => {
        props.dispatch(fetchTodos())
      })
  }

  const handleCheckbox = (todo) => {
    const newTodo = {...todo, completed: !todo.completed}
    props.dispatch(changeTodo(newTodo))
      .then(()=> {
        props.dispatch(fetchTodos())
      })
  }

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleChange = (e) => {
    setEditTodo(e.target.value)
  }

  const keyPressed = (todo, e) => {
    if (e.key === 'Enter') {
      handleSubmit(todo, e)
    }
  }

  const handleSubmit = (todo, e) => {
    e.target.value = ''
    const editedTodo = { ...todo, task: editTodo }
    props.dispatch(changeTodo(editedTodo))
      .then(()=> {
        setIsEditing(false)
        props.dispatch(fetchTodos())
      })
  }



  return (
    <li key={todo.id}
      className={ todo.completed ? 'completed' : null }>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          name="completed"
          defaultChecked={todo.completed}
          onChange={() => handleCheckbox(todo)}
        />
        { !isEditing ? 
        <label onDoubleClick={handleDoubleClick}>
          {todo.task}
        </label> :
        <input type='text' 
          placeholder={todo.task} 
          onChange={handleChange}
          onKeyPress={(e) => keyPressed(todo, e)}/>
        }
        <button 
          className="destroy"
          onClick={() => handleDestroy(todo.id)}>
        </button>
      </div>  
    </li>
  )
}

export default connect()(Todo)