//Single todo with it's own state
//if a single task is double clicked, change ClassName to editing and allow editing, run update.

import React, { useState } from "react";
import { updateTodo } from "../actions/setAllTodos";
import { connect } from "react-redux";
import { deleteThisTodo } from "../actions/setAllTodos"


const ATodo = (props) => {
  const [updatedTodo, setUpdatedTodo] = useState(props.todo.task);

  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   props.dispatch(updateTodo()); //function in actions
  // }, []);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  //handleChange calls setNewUpdatedTodo function which sets data entry into state
  const handleChange = (event) => {
    setUpdatedTodo(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.code == "Enter") {
      props.dispatch(updateTodo(props.todo.id, updatedTodo));
      setEditing(false);
    }
  };

  const deleteTodo = () => {
    console.log("Delete todo");
    props.dispatch(deleteThisTodo(props.todo.id))
  }



  //when enter is clicked changed value field is captured and updateTodo function is fired off to action file
  // function UpdateTodo(id, updatedTodo) {
  //  dispatch(updateTodo(id, updatedTodo))
  // }

  return (
    <li className={editing ? "editing" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onDoubleClick={() => handleDoubleClick()}>{updatedTodo}</label>
        <button className="destroy" onClick={() => deleteTodo()}></button>
      </div>
      <input
        className="edit"
        value={updatedTodo}
        onChange={(event) => handleChange(event)}
        onKeyUp={(event) => handleKeyUp(event)}
      />
    </li>
  );
};

//class no class
export default connect()(ATodo); //wiating for MS2P, if none then fires function


