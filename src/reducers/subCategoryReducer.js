let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("sub_category")) {
    initialState = JSON.parse(localStorage.getItem("sub_category"));
  } else {
    initialState = [];
  }
}

export const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUB_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
