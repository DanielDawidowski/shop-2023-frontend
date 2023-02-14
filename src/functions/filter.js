export const filterItems = (
  products,
  gender,
  minValue,
  maxValue,
  // categories,
  category,
  size
  // starNumbers
) => {
  let tempProducts = [...products];

  if (minValue > 0 || maxValue > 0) {
    tempProducts = tempProducts.filter(
      (p) => p.price >= minValue && p.price <= maxValue
    );
  }

  // if (categories.length > 0) {
  //   tempProducts = tempProducts.filter((x) =>
  //     categories.includes(x.category.name)
  //   );
  // }

  if (gender.length > 0) {
    tempProducts = tempProducts.filter((x) => gender.includes(x.gender));
  }

  // if (category.length > 0) {
  //   tempProducts = tempProducts.filter((x) =>
  //     category.includes(x.category.name)
  //   );
  // }

  // if (size === "44") {
  //   tempProducts = tempProducts.filter((p) => p.size === "44");
  // }
  // if (size === "43") {
  //   tempProducts = tempProducts.filter((p) => p.size === "43");
  // }
  // if (size === "42") {
  //   tempProducts = tempProducts.filter((p) => p.size === "42");
  // }
  // if (size === "41") {
  //   tempProducts = tempProducts.filter((p) => p.size === "41");
  // }
  // if (size === "40") {
  //   tempProducts = tempProducts.filter((p) => p.size === "40");
  // }
  // if (size === "XXL") {
  //   tempProducts = tempProducts.filter((p) => p.size === "XXL");
  // }
  // if (size === "XL") {
  //   tempProducts = tempProducts.filter((p) => p.size === "XL");
  // }
  // if (size === "L") {
  //   tempProducts = tempProducts.filter((p) => p.size === "L");
  // }
  // if (size === "M") {
  //   tempProducts = tempProducts.filter((p) => p.size === "M");
  // }
  // if (size === "S") {
  //   tempProducts = tempProducts.filter((p) => p.size === "S");
  // }

  // if (starNumbers.length > 0) {
  //   tempProducts = tempProducts.filter((x) => {
  //     for (let num of starNumbers) {
  //       if (x.averageRating >= num && x.averageRating < num + 1) {
  //         return x;
  //       }
  //     }
  //   });
  // }

  return tempProducts.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    } else {
      return 0;
    }
  });
};
