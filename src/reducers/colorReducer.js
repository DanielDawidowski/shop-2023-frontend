let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("color")) {
    initialState = JSON.parse(localStorage.getItem("color"));
  } else {
    initialState = [];
  }
}

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLOR":
      return action.payload;
    default:
      return state;
  }
};
