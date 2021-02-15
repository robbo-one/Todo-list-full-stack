import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, removeTodo } from '../actions'

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


  return (
    <ul className="todo-list">
          {props.todos.map(todo => {
            return (
              <li key={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
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