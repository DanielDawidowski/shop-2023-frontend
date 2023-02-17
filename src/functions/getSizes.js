export const getSizes = (products, gender, category, sub_category) => {
  let sizes = [];

  for (let i = 0; i < products.length; i++) {
    let size = products[i].size;
    if (
      (!sizes.includes(size) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        gender === products[i].gender) ||
      (!sizes.includes(size) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        gender === "")
    ) {
      sizes.push(size);
    }
  }

  sizes.sort();

  return sizes;
};
