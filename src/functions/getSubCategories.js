import { motion } from "framer-motion";

export const getSubCategories = (products, gender, category, icon = false) => {
  let subCategories = [];
  let subIcons = [];

  function replaceSpaceWithDash(str) {
    return str.replaceAll("_", " ");
  }

  for (let i = 0; i < products.length; i++) {
    let subCat =
      products[i].sub_category.charAt(0).toUpperCase() +
      products[i].sub_category.slice(1);
    let subIcon = products[i].icon;
    if (
      (!subCategories.includes(subCat) &&
        category === products[i].category &&
        gender === products[i].gender) ||
      (!subCategories.includes(subCat) &&
        category === products[i].category &&
        gender === "")
    ) {
      subCategories.push(subCat);
      subIcons.push(subIcon);
    }
  }

  return !icon
    ? subCategories
    : subCategories.map((el, index) => {
        return (
          <motion.div key={index} className="sub__category--card">
            {icon && <motion.img src={subIcons[index]} alt="icon" />}
            <motion.h3>{replaceSpaceWithDash(el)}</motion.h3>
          </motion.div>
        );
      });
};
