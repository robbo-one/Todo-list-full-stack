//@ts-check

import { SET_TODOS, TOGGLE } from "../actions";

const initialState = [];

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;

    case TOGGLE:
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.id) {
          const markedTodo = {...newState[i]};
          if(markedTodo.completed === 1) {
            markedTodo.completed = 0;
          } else {
            markedTodo.completed = 1;
          }
          ;
          newState[i] = markedTodo;
        }
      }
      return newState;

    default:
      return state;
  };
};

export default reduser
