import React from "react";
import { motion } from "framer-motion";
import Image from "../../components/image/image";

const ProductCard = ({ product }) => {
  const {
    img,
    name,
    gender,
    category,
    sub_category,
    price,
    size,
    mark,
    color,
  } = product;
  return (
    <motion.div className="product__card">
      <div className="product__card--image">
        <Image src={img} alt={name} />
      </div>
      <div className="product__card--details">
        <h2>{name}</h2>
        <h3>gender: {gender}</h3>
        <h3>category: {category}</h3>
        <h3>sub: {sub_category}</h3>
        <h3>price: {price} $</h3>
        <h3>size: {size} </h3>
        <h3>color: {color} </h3>
        <h3>brand: {mark} </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
