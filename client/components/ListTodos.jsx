import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import {removeTodo} from '../actions'
function ListTodos(props) {
  useEffect(() => {
    props.dispatch(fetchTodos());
  }, [props]);

const handleClick = (id) => {
  props.dispatch(removeTodo(id));
}

  return (
    <div >
      <ul> {props.todos.map(todo => (
        <li>
          <div className="view">
            <input type="checkbox" className="toggle">

            </input>
            <label>
              {todo.text}
            </label>
            <button onClick={() => handleClick(todo.id)}className="destroy">
              Delete
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