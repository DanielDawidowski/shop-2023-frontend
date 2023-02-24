import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getSubCategories } from "../../../functions/getSubCategories";
import { getSubIcons } from "../../../functions/getSubIcons";
import data from "../../../data.json";

function SubCategoryHeader({ isHovered, setHovered, categoryHovered }) {
  let { gender } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  const setCategories = (category, sub) => {
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    dispatch({
      type: "SUB_CATEGORY",
      payload: sub,
    });
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="sub__category"
          initial={{ height: 0 }}
          animate={{ height: 100, transition: { duration: 0.6 } }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          exit={{ height: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="sub__category--inner"
          >
            {getSubCategories(data, gender, categoryHovered).map(
              (el, index) => {
                return (
                  // <Link to="/shop" onClick={() => console.log}>
                  <Link
                    to="/shop"
                    key={index}
                    onClick={() =>
                      setCategories(categoryHovered, el.toLowerCase())
                    }
                  >
                    <motion.div className="sub__category--card">
                      {getSubIcons(data, gender, categoryHovered, el).map(
                        (icon, index) => {
                          return (
                            <motion.img key={index} src={icon} alt="icon" />
                          );
                        }
                      )}
                      <motion.h3>{el}</motion.h3>
                    </motion.div>
                  </Link>
                );
              }
            )}
            {/* {showIcons(subCategoriesNames)} */}
            {/* {SubCategoryIcons.map((el) => el.sub_category.map((el) => el.icon))} */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SubCategoryHeader;
