const initialState = [
  {
    id: 1,
    task: "Wash car ",
    priority: 1,
    completed: 0,
  },
  {
    id: 1,
    task: "Go for a walk",
    priority: 2,
    completed: 0
  }
];

//if no action provided to reducer it will return state unchanged
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return state
    default:
      return state
  }
};

export default reducer;
