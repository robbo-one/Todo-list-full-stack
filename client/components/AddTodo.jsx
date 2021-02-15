//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/index";


function AddTodo (props) {

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, []);
console.log(props)
  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      <div>
        {props.todos.map(todo => (
          <div key={todo.id}>{todo.todoTask}</div>
        ))}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
};


export default connect(mapStateToProps)(AddTodo)
