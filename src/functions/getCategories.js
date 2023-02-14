export const getCategories = (products, gender) => {
  let categories = [];

  for (let i = 0; i < products.length; i++) {
    let category =
      products[i].category.charAt(0).toUpperCase() +
      products[i].category.slice(1);
    if (
      (!categories.includes(category) && gender === products[i].gender) ||
      (!categories.includes(category) && gender === "")
    ) {
      categories.push(category);
    }
  }
  // console.log("categoryNames ---", categories);

  return categories;
};
