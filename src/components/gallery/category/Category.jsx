import React from "react";
import "./Category.scss";
const Category = ({ img1, img2, description }) => {
  return (
    <div className="Category__container">
      <div className="Category__img-container">
        <img className="Category__img1" src={img1} alt="img" />
        <img className="Category__img2"src={img2} alt="img" />
      </div>
      <div className="Category__description">{description}</div>
    </div>
  );
};
export default Category;
