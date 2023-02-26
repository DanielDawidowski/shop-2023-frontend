import { combineReducers } from "redux";
import { genderReducer } from "./genderReducer";
import { categoryReducer } from "./categoryReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { cartReducer } from "./cartReducer";
import { wishReducer } from "./wishReducer";
import { reviewReducer } from "./reviewReducer";
import { sizeReducer } from "./sizeReducer";
import { colorReducer } from "./colorReducer";
import { brandReducer } from "./brandReducer";

const rootReducer = combineReducers({
  sub_category: subCategoryReducer,
  category: categoryReducer,
  gender: genderReducer,
  cart: cartReducer,
  wish: wishReducer,
  review: reviewReducer,
  size: sizeReducer,
  color: colorReducer,
  brand: brandReducer,
});

export default rootReducer;
