export const getProduct = (products, id) => {
  let productsArray = [];
  for (let i = 0; i < products.length; i++) {
    let productId = products[i].id.toString();
    if (productId === id) {
      productsArray.push(products[i]);
    }
  }

  return productsArray;
};
