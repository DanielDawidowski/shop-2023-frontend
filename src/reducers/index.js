import { combineReducers } from "redux";
import { genderReducer } from "./genderReducer";
import { categoryReducer } from "./categoryReducer";
import { subCategoryReducer } from "./subCategoryReducer";

const rootReducer = combineReducers({
  sub_category: subCategoryReducer,
  category: categoryReducer,
  gender: genderReducer,
});

export default rootReducer;
