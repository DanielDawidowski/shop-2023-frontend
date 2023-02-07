import { combineReducers } from "redux";
import { genderReducer } from "./genderReducer";
import { categoryReducer } from "./categoryReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  gender: genderReducer,
});

export default rootReducer;
