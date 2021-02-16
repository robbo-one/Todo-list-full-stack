import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, removeTodo, changeTodo } from '../actions'

const TodoList = (props) => {
  const todos = props.todos
  const filter = props.filterList.filter

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

  const filterList = (filter, todos) => {
    console.log(filter)
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default :
        break
    }
  }


  return (
    <ul className="todo-list">
          {filterList(filter, todos).map(todo => {
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
    todos: globalState.todos,
    filterList: globalState.filterList
  }
}


export default connect(mapStateToProps)(TodoList)