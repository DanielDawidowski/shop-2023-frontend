export const getColors = (products) => {
  let colors = [];

  for (let i = 0; i < products.length; i++) {
    let color = products[i].color;
    if (!colors.includes(color)) {
      colors.push(color);
    }
  }

  colors.sort();

  return colors;
};
