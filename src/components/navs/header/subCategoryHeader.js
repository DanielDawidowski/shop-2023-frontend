import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { getSubCategories } from "../../../functions/getSubCategories";
import data from "../../../data.json";

function SubCategoryHeader({ isHovered, setHovered, category }) {
  let { gender } = useSelector((state) => ({ ...state }));
  let icon;
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
            {getSubCategories(data, gender, category, (icon = true))}
            {/* {showIcons(subCategoriesNames)} */}
            {/* {SubCategoryIcons.map((el) => el.sub_category.map((el) => el.icon))} */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SubCategoryHeader;
