import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { SearchStyles } from "./searchStyles";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedGender, setSelectedGender] = useState("all");

  let dispatch = useDispatch();
  // let {  category } = useSelector((state) => ({ ...state }));

  const setCategory = (category) => {
    // add to redux state
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    console.log("category", category);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // const handleGenderChange = (event) => {
  //   setSelectedGender(event.target.value);
  // };

  const filteredProducts = data.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    // if (selectedGender !== "all" && product.gender !== selectedGender) {
    //   return false;
    // }
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.color.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <SearchStyles>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        onClick={(e) => setCategory(e.target.value)}
      >
        <option value="all">Category</option>
        <option value="shoes">Shoes</option>
        <option value="shirt">Shirts</option>
        <option value="pants">Pants</option>
        <option value="dress">Dresses</option>
        <option value="t-shirt">T-Shirts</option>
        <option value="hoodie">Hoods</option>
      </select>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {/* <select value={selectedGender} onChange={handleGenderChange}>
        <option value="all">All genders</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select> */}
      <ul>
        {searchTerm.length > 0 && filteredProducts.length !== 0
          ? filteredProducts.slice(0, 5).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <li>
                  <img src={product.img} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <h4>{product.price} $</h4>
                  </div>
                </li>
              </Link>
            ))
          : searchTerm.length !== 0 && (
              <li>
                <h3>No products found</h3>
              </li>
            )}
      </ul>
    </SearchStyles>
  );
};

export default Search;
