import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions'

const TodoList = (props) => {

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])


  return (
    <ul className="todo-list">
          {props.todos.map(todo => {
            return (
              <li key={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.task}</label>
                  <button className="destroy"></button>
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