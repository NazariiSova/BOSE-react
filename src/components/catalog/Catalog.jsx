import React from "react";
import Product from "./product/Product.jsx"

const Catalog = () => {
    return (
<div className="Catalog__container">
    <div className="Catalog__Title">
    Recommended
    </div>
    <div className="Catalog__product-container">
        <Product/>
    </div>
</div>
    )
}
export default Catalog;