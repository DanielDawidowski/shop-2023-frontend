export const filterItems = (
  products,
  gender,
  minValue,
  maxValue,
  categories,
  sub_categories,
  size,
  colors,
  brands
  // starNumbers
) => {
  let tempProducts = [...products];
  // console.log(tempProducts);

  if (minValue > 0 || maxValue > 0) {
    tempProducts = tempProducts.filter(
      (p) => p.price >= minValue && p.price <= maxValue
    );
  }

  if (gender.length > 0) {
    tempProducts = tempProducts.filter((x) => gender.includes(x.gender));
  }

  if (categories.length > 0) {
    tempProducts = tempProducts.filter((x) => categories.includes(x.category));
  }

  if (sub_categories.length > 0) {
    tempProducts = tempProducts.filter((x) =>
      sub_categories.includes(x.sub_category)
    );
  }

  if (size.length > 0) {
    tempProducts = tempProducts.filter((x) => size.includes(x.size));
  }

  if (colors.length > 0) {
    tempProducts = tempProducts.filter((x) => colors.includes(x.color));
  }

  if (brands.length > 0) {
    tempProducts = tempProducts.filter((x) => brands.includes(x.mark));
  }

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
