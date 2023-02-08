import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryHeaderStyles } from "./headerStyles";
import { Container } from "../../layout/layoutStyles";
import Hamburger from "../hamburger/hamburger";
import { Icon } from "../../../components/globalStyles/icon";
import data from "../../../data.json";

const clothing_products = [
  { name: "Classic T-Shirt", gender: "Men", category: "Tops" },
  { name: "Skinny Jeans", gender: "Women", category: "Bottoms" },
  { name: "Leather Jacket", gender: "Men", category: "Outerwear" },
  { name: "Little Black Dress", gender: "Women", category: "Dresses" },
  { name: "Sneakers", gender: "Men", category: "Footwear" },
];

function CategoryHeader({ toggleMenu, setToggleMenu, setShowModal }) {
  let { gender } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  const setCategory = (category) => {
    // add to reeux state
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    console.log("category ---", category);
  };

  const getCategories = (products) => {
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
    console.log("categoryNames ---", categories);

    return categories;
  };

  return (
    <>
      <CategoryHeaderStyles>
        <Container>
          <div className="category__header--inner">
            <div className="category__header--hamburger">
              <Hamburger
                setToggleMenu={setToggleMenu}
                toggleMenu={toggleMenu}
              />
            </div>
            <ul className="category__header--list">
              {getCategories(data).map((category, index) => (
                <li
                  key={index}
                  onClick={() => setCategory(category.toLowerCase())}
                >
                  <h3>{category}</h3>
                </li>
              ))}
            </ul>
            <div
              className="category__header--search"
              onClick={() => setShowModal(true)}
            >
              <h3>Search</h3>
              <Icon noborder="false" viewBox="0 0 16 16">
                <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z" />
              </Icon>
            </div>
          </div>
        </Container>
      </CategoryHeaderStyles>
    </>
  );
}

export default CategoryHeader;
