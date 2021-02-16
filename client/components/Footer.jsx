import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos, removeTodo } from '../actions'

import Filters from './Filters'


const Footer = (props) => {
  const todoCount = props.todos.length
  const todos = props.todos

  const clearComplete = () => {
    const toClear = todos.filter(todo => {
      if (todo.completed) { return todo }
    })
    return toClear.map(todo => {
      return props.dispatch(removeTodo(todo.id))
        .then(() => {
          props.dispatch(fetchTodos())
        })
    })
  }

  return (
   <>
    <span className="todo-count">
      <strong>{todoCount}</strong> 
      { todoCount === 1 ? " item left" : " items left" }
    </span>
    <Filters />
    <button className="clear-completed"
      onClick={clearComplete}>
      Clear completed
    </button>
   </>
 )
} 

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos,
  }
}

export default connect(mapStateToProps)(Footer)