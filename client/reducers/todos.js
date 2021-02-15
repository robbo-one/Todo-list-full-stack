import { ADD_TODO, SET_TODOS } from "../actions"


const initialState = [
{id: 1, todo: "grow potatoes", completed:'false'},
{id: 2, todo: "boil Potatoes", completed:'false'},
{id: 3, todo: "mash Potatoes", completed:'false'}]

console.log(todos)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    case ADD_TODO:
      return [
        ...state,
        { todo: action.todo, completed: "false" },
      ];
    default:
      return state;
  }
};

export default reducer