import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, removeTodo, changeTodo } from '../actions'

const TodoList = (props) => {
  // const [ checkbox, setCheckbox ] = useState(false)

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
    // setCheckbox((currentState) => {
    //   return !currentState
    // })
    const newTodo = {...todo, completed: !todo.completed}
    // todo.completed = checkbox
    props.dispatch(changeTodo(newTodo))
      .then(()=> {
        props.dispatch(fetchTodos())
      })
  }


  return (
    <ul className="todo-list">
          {props.todos.map(todo => {
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
                  <label>{todo.task}</label>
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