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
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedCategory) ||
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
        <option value="all">All</option>
        <option value="shoes">Shoes</option>
        <option value="shirts">Shirts</option>
        <option value="trousers">Trousers</option>
        <option value="dresses">Dresses</option>
        <option value="hoodies">Hoodies</option>
        <option value="coats">Coats</option>
      </select>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div className="search--list">
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
      </div>
    </SearchStyles>
  );
};

export default Search;
