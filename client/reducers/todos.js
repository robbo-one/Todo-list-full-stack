//@ts-check

import { SET_TODOS, TOGGLE } from "../actions";

let initialState = [];

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;

    case TOGGLE:
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.id) {
          const markedTodo = {...newState[i]};
          markedTodo.completed = action.completed;
          newState[i] = markedTodo;
        }
      }

      return newState;

    default:
      return state;
  };
};

export default reduser
