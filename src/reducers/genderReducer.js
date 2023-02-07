let initialState = "";

// load cart items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("gender")) {
    initialState = JSON.parse(localStorage.getItem("gender"));
  } else {
    initialState = "";
  }
}

export const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENDER":
      return action.payload;
    default:
      return state;
  }
};
