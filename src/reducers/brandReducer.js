let initialState = [];

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("brand")) {
    initialState = JSON.parse(localStorage.getItem("brand"));
  } else {
    initialState = [];
  }
}

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BRAND":
      return action.payload;
    default:
      return state;
  }
};
