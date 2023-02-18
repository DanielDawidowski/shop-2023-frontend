import { combineReducers } from "redux";
import { genderReducer } from "./genderReducer";
import { categoryReducer } from "./categoryReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  sub_category: subCategoryReducer,
  category: categoryReducer,
  gender: genderReducer,
  cart: cartReducer,
});

export default rootReducer;
