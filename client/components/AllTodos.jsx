import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTodos } from "../actions/setAllTodos";
import ATodo from "./ATodo"
import DeleteTodo from "./DeleteTodo"

const AllTodos = (props) => {
  useEffect(() => {
    props.dispatch(fetchAllTodos()); //function call dispatched to action
  }, []);


 

  
  return (
    <>
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <ATodo key={todo.id} todo={todo}/>
          // <li key={todo.id}>
          //   <div className="view">
          //     <input className="toggle" type="checkbox" />
          //     <label
          //       onDoubleClick={(event) => handleDoubleClick(event, todo.id)}
          //     >
          //       {todo.task}
          //     </label>
          //     <button className="destroy"></button>
          //   </div>
          //   <input className="edit" value="Buy a unicorn" />
          // </li>
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
