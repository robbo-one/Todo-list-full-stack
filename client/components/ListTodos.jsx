import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import Todo from './Todo'

function ListTodos(props) {

  useEffect(() => {
    props.dispatch(fetchTodos())
    console.log("fetching")
  }, []);

  const filter = props.filters



  return (

    <div >
      <ul className="todo-list"> {
        filter === 'all' ?
          props.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          }
          )
          : filter === 'active' ? props.todos.map(todo => {
            return !todo.completed &&

              <Todo key={todo.id} todo={todo} />
          }
          ) : filter === 'completed' && props.todos.map(todo => {
            return todo.completed &&

              <Todo key={todo.id} todo={todo} />
          }
          )
      }
      </ul>
    </div>

  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos,
    filters: globalState.filters
  }
};

export default connect(mapStateToProps)(ListTodos)