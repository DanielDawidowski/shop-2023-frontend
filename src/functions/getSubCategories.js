export const getSubCategories = (products, gender, category) => {
  let subCategories = [];

  // function replaceSpaceWithDash(str) {
  //   return str.replaceAll("_", " ");
  // }

  for (let i = 0; i < products.length; i++) {
    let subCat =
      products[i].sub_category.charAt(0).toUpperCase() +
      products[i].sub_category.slice(1);
    if (
      (!subCategories.includes(subCat) &&
        category === products[i].category &&
        gender === products[i].gender) ||
      (!subCategories.includes(subCat) &&
        category === products[i].category &&
        gender === "")
    ) {
      subCategories.push(subCat);
    }
  }

  return subCategories;
};
