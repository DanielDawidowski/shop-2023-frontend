let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("wish")) {
    initialState = JSON.parse(localStorage.getItem("wish"));
  } else {
    initialState = [];
  }
}

export const wishReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return action.payload;
    default:
      return state;
  }
};
