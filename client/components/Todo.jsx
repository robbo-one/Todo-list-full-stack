//@ts-check

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTodos, toggleTheTask, addNewTodos, deleteThisTodo } from "../actions/index";



function AddTodo(props) {

  function handleClick(e) {
    console.log("clicked")
    props.dispatch(toggleTheTask(Number(e.target.getAttribute("id"))))
  }

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, []);

  useEffect(() => {
// console.log(props.todos)
    setTodos(props.todos)
  }, [JSON.stringify(props.todos)]);


  let count = 0;
  for (let i = 0; i < props.todos.length; i++) {
    if (props.todos[i].completed === 0) {
      count++;
    }
  }

  function handleKeyPress (e)  {
    if(e.key === "Enter"){
      // console.log("Enter pressed")
      props.dispatch(addNewTodos(e.target.value))
      // console.log(e.target.value)
      e.target.value = "";
    }
  }

  function handleDeleteTodo(e) {
    // console.log(e.target.dataset.id)
    props.dispatch(deleteThisTodo(Number(e.target.dataset.id)));
  }

  function deleteAllComplited() {
    // console.log(props.todos)
    for (let i = 0; i < props.todos.length; i++) {
      if (props.todos[i].completed === 1) {
        props.dispatch(deleteThisTodo(props.todos[i].id))
      }
    }
  }

  const [todos, setTodos] = useState([]);

  function showAllTodos() {
    setTodos(props.todos)
  }

  function showActiveTodos() {
    const activeTodos = props.todos.filter(todo => todo.completed === 0);
    setTodos(activeTodos);
  }

  function showCompletedTodos() {
    const completedTodos = props.todos.filter(todo => todo.completed === 1);
    setTodos(completedTodos);
  }

  return (
    <div>
      <div className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyPress={handleKeyPress} />
        </div>
        <ul className="todo-list">
          {todos.map(todo => {
            return (
              <li key={todo.id}  className={todo.completed === 1 ? "completed" : ""}>
              <div className="view">
                <input className="toggle" id={todo.id} type="checkbox" checked={todo.completed === 1} onChange={handleClick} />
                <label>{todo.todoTask}</label>
                <button className="destroy" data-id={todo.id} onClick={handleDeleteTodo}></button>
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
            <a  onClick={() => showAllTodos()} className="selected" href="#/">All</a>
          </li>
          <li>
            <a onClick={() => showActiveTodos()} href="#/active">Active</a>
          </li>
          <li>
            <a onClick={() => showCompletedTodos()} href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={deleteAllComplited}>Clear completed</button>
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
