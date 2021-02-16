import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'

import { fetchTodos, removeTodo, changeTodo } from '../actions'

const TodoList = (props) => {
  
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

  

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


  return (
    <ul className="todo-list">
          {props.todos.map(todo => {
            return (
              <li key={todos.id}
                className={ todos.completed ? 'completed' : null }>
                <div className="view">
                  <input 
                    className="toggle" 
                    type="checkbox" 
                    name="completed"
                    defaultChecked={todos.completed}
                    onChange={() => handleCheckbox(todo)}
                  />
                  <label>{todos.todo}</label>
                  <button 
                    className="destroy"
                    onClick={() => handleDestroy(todo.id)}>
                  </button>
                </div>  
              </li>)
          })}
    </ul>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}


export default connect(mapStateToProps)(TodoList)