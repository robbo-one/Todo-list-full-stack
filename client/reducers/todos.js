//@ts-check

import { SET_TODOS } from "../actions";

const initialState = [];

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    default:
      return state;
  };
};

export default reduser