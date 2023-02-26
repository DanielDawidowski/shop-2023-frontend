let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("size")) {
    initialState = JSON.parse(localStorage.getItem("size"));
  } else {
    initialState = [];
  }
}

export const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIZE":
      return action.payload;
    default:
      return state;
  }
};
