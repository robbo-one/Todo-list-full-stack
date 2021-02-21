import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import { removeTodo, updateTodos } from '../actions'


function Todo(props) {
    const todo = props.todo


  useEffect(() => {
    props.dispatch(fetchTodos())
    console.log("fetching")
  }, []);

  const handleClick = (id) => {
    props.dispatch(removeTodo(id))
      .then(() => {
        props.dispatch(fetchTodos())
      })
  }

  const handleCheck = (id, completed) => {
    console.log(completed)
    props.dispatch(updateTodos(id, completed))
      .then(() => {
        props.dispatch(fetchTodos())
      })
  }

  
  return (

    <div >
        <li className={ todo.completed ? 'completed' : '' }>
          <div className="view" >
            <input   onChange={() => handleCheck(todo.id, todo.completed)} type="checkbox" className="toggle">
            </input>
            <label >
              {todo.text}
            </label>
            <button onClick={() => handleClick(todo.id)} className="destroy">
            </button>
          </div>
        </li>
    </div>
      
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
};

export default connect(mapStateToProps)(Todo)