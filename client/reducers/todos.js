import { ADD_TODO } from "../actions"



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Todo:
      return [
        ...state,
        { task: action.todo, completed: "false" },
      ];
    default:
      return state;
  }
};

export default reducer