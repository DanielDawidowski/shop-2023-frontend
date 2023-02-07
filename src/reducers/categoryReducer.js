let initialState = "";

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("category")) {
    initialState = JSON.parse(localStorage.getItem("category"));
  } else {
    initialState = "";
  }
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
