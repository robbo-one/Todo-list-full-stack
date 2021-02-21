import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import { removeTodo, updateTodos } from '../actions'


function ListTodos(props) {


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
      <ul className="todo-list"> {props.todos.map(todo => 
      (
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
      
      ))}
      </ul>
    </div>
      
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
};

export default connect(mapStateToProps)(ListTodos)