import { ADD_TASK } from "../actions";

const initialState = [
  { id: 1, task: "Homework", priority: 1, completed: "no" },
  { id: 2, task: "Laundry", priority: 2, completed: "no" },
  { id: 3, task: "Cry", priority: 3, completed: "no" },
  { id: 4, task: "Cook Dinner", priority: 4, completed: "no" }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { task: action.task, priority: action.priority, completed: "no" },
      ];
    default:
      return state;
  }
};

export default reducer