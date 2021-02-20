import React, { useState } from "react";
import { setNewTodo } from "../actions/setAllTodos";
import { addTodo } from "../actions/setAllTodos";
import { connect } from "react-redux";

//User enters newTodo in field, presses enter.
// handleSubmit pushes completed data in newTodo var to addTodo function
// handleChange calls setNewTodo function which sets data entry into state

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newTodo);
    props.dispatch(addTodo({ task: newTodo }));//routes
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
      </form>
    </>
  );
}

export default connect()(AddTodo);
