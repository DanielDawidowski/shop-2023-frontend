export const getSubIcons = (products, gender, category, subCategory) => {
  let subIcons = [];

  for (let i = 0; i < products.length; i++) {
    let subIcon = products[i].icon;
    if (
      (!subIcons.includes(subIcon) &&
        subCategory.toLowerCase() === products[i].sub_category &&
        category === products[i].category &&
        gender === products[i].gender) ||
      (!subIcons.includes(subIcon) &&
        subCategory.toLowerCase() === products[i].sub_category &&
        category === products[i].category &&
        gender === "")
    ) {
      subIcons.push(subIcon);
    }
  }

  return subIcons;
};
