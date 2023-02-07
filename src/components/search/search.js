import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import data from "../../data.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedGender, setSelectedGender] = useState("all");

  let dispatch = useDispatch();
  // let {  category } = useSelector((state) => ({ ...state }));

  const setCategory = (category) => {
    // add to reeux state
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
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
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        onClick={(e) => setCategory(e.target.value)}
      >
        <option value="all">Filter By Category</option>
        <option value="shoes">Shoes</option>
        <option value="shirt">Shirts</option>
        <option value="pants">Pants</option>
        <option value="dress">Dresses</option>
        <option value="t-shirt">T-Shirts</option>
        <option value="hoodie">Hoods</option>
      </select>
      {/* <select value={selectedGender} onChange={handleGenderChange}>
        <option value="all">All genders</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select> */}
      <ul>
        {filteredProducts.length !== 0 ? (
          filteredProducts.slice(0, 2).map((product) => (
            <li key={product.id}>
              Name: {product.name} | Category: {product.category} | Gender:{" "}
              {product.gender} | Price: ${product.price} | Color:{" "}
              {product.color}
              <img src={product.img} alt={product.name} />
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
