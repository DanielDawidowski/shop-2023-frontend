export const getColors = (products, gender, category, sub_category, sizes) => {
  let colors = [];

  for (let i = 0; i < products.length; i++) {
    let color = products[i].color;
    if (
      (!colors.includes(color) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        gender === products[i].gender &&
        sizes.includes(products[i].size)) ||
      (!colors.includes(color) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        sizes.includes(products[i].size) &&
        gender === "")
    ) {
      colors.push(color);
    }
  }

  colors.sort();

  return colors;
};
