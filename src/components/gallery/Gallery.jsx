import React from "react";
import "./Gallery.scss";

import Category from "./category/Category.jsx";
import photo1 from "../../components/img/photo1.png";
import photo2 from "../../components/img/photo2.png";
import photo3 from "../../components/img/photo3.png";
import photo4 from "../../components/img/photo4.png";
import photo5 from "../../components/img/photo5.png";
import photo6 from "../../components/img/photo6.png";

const categories = [
  { id: 1, img1: photo1, img2: photo2, description: "Headphones & earbuds" },
  { id: 2, img1: photo3, img2: photo4, description: "Speakers" },
  { id: 3, img1: photo5, img2: photo6, description: "Audio sunglasses" },
];
const Gallery = () => {
  return (
    <div className="gallery__container" id="gallery">
      <div className="gallery__title">
        Browse Bose <br /> products by category
      </div>
      <div className="gallery__category-container">
        <div className="gallery__category-img">
          {categories.map((category) => (
            <Category
              key={category.id}
              img1={category.img1}
              img2={category.img2}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
