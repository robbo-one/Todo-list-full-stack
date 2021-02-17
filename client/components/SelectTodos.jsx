import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {pullTodos} from '../actions'

const SelectTodos = (props) => {
  useEffect(() => {
    props.dispatch(pullTodos())
  }, [])
  return (
    <>
      <ul>
        {props.todos.map(todo => {
          return <li key={todo.id}>{todo.todo}</li>
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}
export default connect(mapStateToProps) (SelectTodos)
