export const getSubCategories = (
  products,
  subCategory,
  gender,
  icon = false
) => {
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

  return subCategories;

  // return subCategories.map((el, index) => {
  //   return (
  //     <motion.div key={index} className="sub__category--card">
  //       {icon && <motion.img src={subIcons[index]} alt="icon" />}
  //       <motion.h3>{replaceSpaceWithDash(el)}</motion.h3>
  //     </motion.div>
  //   );
  // });
};
