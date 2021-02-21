import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchTasks} from "../actions/actions";

// I don't even know

const CurrentTasksList = (props) => {
  // useState lets you add React state to function components
  // returns a pair of values: the current state and a function that updates it.
  const [listCurrentState, listUpdateState] = useState([]);

  //useEffect tells React your component needs to do something after render
  useEffect(() => {
    props.dispatch(fetchTasks());
  }, []);

  return (
    <>
      <ul className="todo-list">
        {props.tasks.map((task) => {
          return <li key={task.id}>{task.detail}</li>;
        })}
      </ul>
    </>
  );
};
const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks,
  };
};
export default connect(mapStateToProps)(CurrentTasksList);
