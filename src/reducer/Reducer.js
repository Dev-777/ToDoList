const initialState = {
  modal7: false,
  colors: ["red", "green", "yellow", "white"],
  toDoList: [],
  createNewItem: {
    color: null,
    title: null,
    description: null,
  },
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "open":
      return { ...state, modal7: !state.modal7 };
    case "color":
      return { ...state, createNewItem: { color: action.titleColor } };
    case "add":
      state.createNewItem.title = action.title;
      state.createNewItem.description = action.description;
      state.toDoList.push(state.createNewItem);
      state.modal7 = !state.modal7;
      return {
        ...state,
      };

    default:
      return state;
  }
};
