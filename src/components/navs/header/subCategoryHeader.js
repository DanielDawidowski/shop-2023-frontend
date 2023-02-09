import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../../data.json";

function SubCategoryHeader({ isHovered, setHovered, subCategory }) {
  let { gender } = useSelector((state) => ({ ...state }));

  const getSubCategories = (products, subCategory) => {
    let subCategories = [];
    for (let i = 0; i < products.length; i++) {
      let subCat =
        products[i].sub_category.charAt(0).toUpperCase() +
        products[i].sub_category.slice(1);
      if (
        !subCategories.includes(subCat) &&
        subCategory === products[i].category &&
        gender === products[i].gender
      ) {
        subCategories.push(subCat);
        console.log(subCategory);
      }
    }
    return subCategories;
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="sub-category"
          initial={{ height: 0 }}
          animate={{ height: 100, transition: { duration: 0.6 } }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          exit={{ height: 0, transition: { duration: 0.6 } }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            {getSubCategories(data, subCategory)}
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SubCategoryHeader;
