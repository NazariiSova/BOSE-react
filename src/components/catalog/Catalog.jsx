import React from "react";
import Product from "./product/Product.jsx";
import "./Catalog.scss"
import speaker1 from "../img/speaker1.png";
import speaker2 from "../img/speaker2.png";
import speaker3 from "../img/speaker3.png";
const products = [
  {
    id: 1,
    productSpeaker: speaker1,
    title: "Bose portable Smart speaker",
    description: "Smart home",
    price: "$ 399.00",
  },
  {
    id: 2,
    productSpeaker: speaker2,
    title: "SoundLink Flex Bluetooth speaker",
    description: "Portable bluetooth",
    price: "$ 149.00",
  },
  {
    id: 3,
    productSpeaker: speaker3,
    title: "SoundLink Color Bluetooth speaker II",
    description: "Portable bluetooth",
    price: "$ 129.00",
  },
];
const Catalog = () => {
  return (
    <div className="Catalog__container" id="catalog">
      <div className="Catalog__title">Recommended</div>
      <div className="Catalog__product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            productSpeaker={product.productSpeaker}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Catalog;
