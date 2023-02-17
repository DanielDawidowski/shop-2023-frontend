export const getBrands = (
  products,
  gender,
  category,
  sub_category,
  sizes,
  colors
) => {
  let brands = [];

  for (let i = 0; i < products.length; i++) {
    let brand = products[i].mark;
    if (
      (!brands.includes(brand) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        gender === products[i].gender &&
        sizes.includes(products[i].size) &&
        colors.includes(products[i].color)) ||
      (!brands.includes(brand) &&
        category === products[i].category &&
        sub_category.includes(products[i].sub_category) &&
        gender === "" &&
        sizes.includes(products[i].size) &&
        colors.includes(products[i].color))
    ) {
      brands.push(brand);
    }
  }

  return brands;
};
