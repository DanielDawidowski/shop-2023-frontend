import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../../data.json";

function SubCategoryHeader({ isHovered, setHovered, subCategory }) {
  let { gender } = useSelector((state) => ({ ...state }));

  function replaceSpaceWithDash(str) {
    return str.replaceAll("_", " ");
  }

  const getSubCategories = (products, subCategory) => {
    let subCategories = [];
    let subIcons = [];

    for (let i = 0; i < products.length; i++) {
      let subCat =
        products[i].sub_category.charAt(0).toUpperCase() +
        products[i].sub_category.slice(1);
      let subIcon = products[i].icon;
      if (
        (!subCategories.includes(subCat) &&
          subCategory === products[i].category &&
          gender === products[i].gender) ||
        (!subCategories.includes(subCat) &&
          subCategory === products[i].category &&
          gender === "")
      ) {
        subCategories.push(subCat);
        subIcons.push(subIcon);
      }
    }

    return subCategories.map((el, index) => {
      return (
        <motion.div key={index} className="sub__category--card">
          <motion.img src={subIcons[index]} alt="icon" />
          <motion.h3>{replaceSpaceWithDash(el)}</motion.h3>
        </motion.div>
      );
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
            {getSubCategories(data, subCategory)}
            {/* {showIcons(subCategoriesNames)} */}
            {/* {SubCategoryIcons.map((el) => el.sub_category.map((el) => el.icon))} */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SubCategoryHeader;
