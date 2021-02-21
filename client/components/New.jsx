import React, {useEffect, useState} from "react";
// import {connect} from "react-redux";
import { addNewTask, saveNew } from "../actions/actions";
// import { CurrentTasksList } from './Current'

const AddNewTask = (props) => {
  // useState lets you add React state to function components
  // returns a pair of values: the current state and a function that updates it.
  const [addCurrentState, addUpdateState] = useState(
    {
      detail: ``,
    }
  );

  //useEffect tells React your component needs to do something after render
  useEffect(() => {
    const confirmSuccess = () => { }
    props.dispatch(addNewTask(confirmSuccess));
  }, []);

  const handleChange = (e) => {
    addUpdateState((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(saveNew(addCurrentState))
    e.target.reset()
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }
  return (
    <>
      <div>
        <input className="new-todo" placeholder="Add cowboy" autoFocus={true} onChange={handleChange} onKeyPress={handleKeyPress} type="text" name="new"/>
      </div>
    </>
  );
};


export default AddNewTask

