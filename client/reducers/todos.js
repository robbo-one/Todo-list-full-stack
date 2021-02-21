//@ts-check

import { SET_TODOS, TOGGLE, ADD_TODO, DELETE_TODO } from "../actions";

let initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;

    case TOGGLE: {
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.id) {
          const markedTodo = {...newState[i]};
          markedTodo.completed = action.completed;
          newState[i] = markedTodo;
        }
      }

      return newState;
    };

    case ADD_TODO: {
      const newState = [...state];
      newState.push(action.newTask);
      return newState;
    };

    case DELETE_TODO: {
      const newState = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.id) {
          newState.push(state[i]);
        }
      }
      return newState;
    }

    default:
      return state;
  }
};

export default reducer
