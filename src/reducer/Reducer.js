const initialState = {
  modal7: false,
  colors: ["red", "green", "yellow", "white"],
  toDoList: [],
  createNewItem: {
    color: null,
    title: null,
    description: null,
    showDesc: "none",
    readOnly: true,
  },
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "open":
      return { ...state, modal7: !state.modal7 };
    case "add":
      state.createNewItem.title = action.title;
      state.createNewItem.description = action.description;
      state.toDoList.push(state.createNewItem);
      state.modal7 = !state.modal7;
      state.createNewItem = {
        color: null,
        title: null,
        description: null,
        showDesc: "none",
        readOnly: true,
      };
      return {
        ...state,
      };

    case "color":
      state.createNewItem = {
        ...state.createNewItem,
        color: action.titleColor,
      };
      return { ...state };
    case "listItemColor":
      state.toDoList[action.itemIndex] = {
        ...state.toDoList[action.itemIndex],
        color: action.titleColor,
      };
      return { ...state };

    case "show":
      state.toDoList[action.itemIndex].showDesc
        ? (state.toDoList[action.itemIndex].showDesc = null)
        : (state.toDoList[action.itemIndex].showDesc = "none");

      return { ...state };

    case "edit":
      state.toDoList[action.itemIndex].readOnly = false;

      return { ...state };
    default:
      return { ...state };
  }
};
