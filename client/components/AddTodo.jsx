//@ts-check

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTodos, toggleTheTask, addNewTodos } from "../actions/index";


function AddTodo (props) {

  function handleClick(e) {
    props.dispatch(toggleTheTask(Number(e.target.getAttribute("id"))))
  }

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, []);


  let count = 0;
  for (let i = 0; i < props.todos.length; i++) {
    if (props.todos[i].completed === 0) {
      count++;
    }
  }

  function handleKeyPress (e)  {
    if(e.key === "Enter"){
      console.log("Enter pressed")
      props.dispatch(addNewTodos(e.target.value))
      console.log(e.target.value)
      e.target.value = "";
    }
  }

  return (
    <div>
      <div className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyPress={handleKeyPress} />
        </div>
        <ul className="todo-list">
          {props.todos.map(todo => {

            return (
              <li key={todo.id}  className={todo.completed === 1 ? "completed" : ""}>
              <div className="view">
                <input className="toggle" id={todo.id} type="checkbox" checked={todo.completed === 1} onChange={handleClick} />
                <label>{todo.todoTask}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" />
            </li>
          )
          })}
        </ul>
        <div className="footer">
        <span className="todo-count"><strong>{count}</strong> item left</span>
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
