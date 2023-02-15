export const getSizes = (products, shoes = false) => {
  let clothesSizes = [];
  let shoesSizes = [];

  for (let i = 0; i < products.length; i++) {
    let size = products[i].size;
    if (!shoesSizes.includes(size) && typeof size === "number") {
      shoesSizes.push(size);
    }
    if (!clothesSizes.includes(size) && typeof size === "string") {
      clothesSizes.push(size);
    }
  }

  clothesSizes.sort();
  shoesSizes.sort();

  return shoes ? shoesSizes : clothesSizes;
};
