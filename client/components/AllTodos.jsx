//render a list of all todos
import React, { useEffect } from "react";
import { connect } from "react-redux";

//render a list of todos, map through and show task field for all

const AllTodos = (props) => {
  useEffect(() => {}, []);

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
  );
};

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos,
  };
};

export default connect(mapStateToProps)(AllTodos);
