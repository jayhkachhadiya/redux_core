const initialValues = {
  items: [],
  updateStatus: null
}

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_USER":
      return {
        // ...state,
        items: [...state.items.filter((user, i) => i !== action.payload)],
      };

    // case "UPDATE_USER":
    //   const { index, updatedUserData } = action.payload;
    //   const updatedItems = [...state.items];
    //   updatedItems[index] = updatedUserData;
    //   console.log(updatedItems, "updatedItems");
    //   return {
    //     items: updatedItems,
    //   };
    case "UPDATE_USER":
      const { index, updatedUserData } = action.payload;
      const updatedItems = [...state.items];
      if (updatedUserData) {
        updatedItems[index] = updatedUserData;
      }
      console.log(updatedItems, "updatedItems");
      return {
        items: updatedItems,
      };
    default:
      return state;
  }
};

export default userReducer;
