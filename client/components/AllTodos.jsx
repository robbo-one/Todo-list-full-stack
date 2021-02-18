import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTodos } from "../actions/setAllTodos";

const AllTodos = (props) => {
  useEffect(() => {
    props.dispatch(fetchAllTodos());
  }, []);

  return (
    <>
      <ul class="todo-list">
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>{todo.task}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="Buy a unicorn" />
          </li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos,
  };
};

export default connect(mapStateToProps)(AllTodos);
