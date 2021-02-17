//@ts-check

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/index";


function AddTodo (props) {
  const [completed, setCompleted] = useState(false);

function handleClick(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    {props.todos.map(todo => {
      todo.completed = true;
    })}
    setCompleted(!completed)
   
  }


  useEffect(() => {
    props.dispatch(fetchTodos())
  }, []);

  // console.log(props)
  // onClick={() => {setCompleted(!completed)}} className={completed === true ? "completed" : ""}
  return (
    <div>
      <div className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?"/>
        </div>
        <ul className="todo-list">
          {props.todos.map(todo => {
           
            return (
              <li key={todo.id} id={todo.id} onClick={handleClick} className={completed === true ? "completed" : ""}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.todoTask}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" />
            </li>
          )
          })}
        </ul>
        <div className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  // console.log(globalState)
  return {
    todos: globalState.todos
  }
};


export default connect(mapStateToProps)(AddTodo)
