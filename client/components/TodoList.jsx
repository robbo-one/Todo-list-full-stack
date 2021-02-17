import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions'

import Todo from './Todo'

const TodoList = (props) => {
  const todos = props.todos

  useEffect(() => {
    
    props.dispatch(fetchTodos())
  }, [])


  return (
    
    <ul className="todo-list">
          {todos.map(todo => {
            return (
              <Todo key={todo.id} todo={todo}/>
            )            
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