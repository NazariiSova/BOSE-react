import React from "react";
import "./MainPage.scss";
import Header from "../components/header/header.jsx";
import Catalog from "../components/catalog/Catalog.jsx";
import Gallery from "../components/gallery/Gallery.jsx";
import footer from "../components/img/footer.png";
const MainPage = () => {
  return (
    <div className="main__container">
      <Header />
      <Catalog />
      <Gallery />
      <div className="buy__container" id="buy">
        <div className="buy__title">
          Why buy direct
          <br /> from Bose
        </div>
        <div className="buy__container-block">
          <div className="buy__description-container">
            <ul className="buy__description-list">
              <li className="buy__description-item">
                Free 2-day shipping and returns
              </li>
              <li className="buy__description-item">90-day risk-free trial</li>
              <li className="buy__description-item">
                World class customer service
              </li>
              <li className="buy__description-item">
                My Bose account management
              </li>
            </ul>
            <div className="buy__description-text">
              A great product is more than what’s in the box. It’s a promise of
              <br />
              premium performance, world-class support, and everything you
              <br /> expect from a trusted brand. It’s just one of many reasons
              why
              <br /> you’ll shop with confidence on Bose.com.
            </div>
          </div>
        </div>
      </div>
      <img className="footer__photo" src={footer} alt="footer" />
    </div>
  );
};
export default MainPage;
