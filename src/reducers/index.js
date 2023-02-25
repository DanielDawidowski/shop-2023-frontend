import { combineReducers } from "redux";
import { genderReducer } from "./genderReducer";
import { categoryReducer } from "./categoryReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { cartReducer } from "./cartReducer";
import { wishReducer } from "./wishReducer";
import { reviewReducer } from "./reviewReducer";

const rootReducer = combineReducers({
  sub_category: subCategoryReducer,
  category: categoryReducer,
  gender: genderReducer,
  cart: cartReducer,
  wish: wishReducer,
  review: reviewReducer,
});

export default rootReducer;
