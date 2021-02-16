import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions'

import Todo from './Todo'

const TodoList = (props) => {
  const todos = props.todos
  const filter = props.filterList.filter

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

  const filterList = (filter, todos) => {
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
              <Todo key={todo.id} todo={todo}/>
            )            
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