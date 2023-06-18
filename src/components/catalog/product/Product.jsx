import React from "react";
import "./Product.scss"
const Product = ({productSpeaker, title, description, price}) => {
  return (
    <div className="product__card">
      <img className="product__img" src={productSpeaker} alt="speaker" />
      <div className="product__title">{title}</div>
      <div className="product__description">{description}</div>
      <div className="product__price">{price}</div>
    </div>
  );
};
export default Product;