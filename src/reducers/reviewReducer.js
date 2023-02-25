let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("review")) {
    initialState = JSON.parse(localStorage.getItem("review"));
  } else {
    initialState = [];
  }
}

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LATEST_REVIEW":
      return action.payload;
    default:
      return state;
  }
};
