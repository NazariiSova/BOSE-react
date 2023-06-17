import React from "react";
import "./MainPage.scss";
import Header from "../components/header/header.jsx";
import Catalog from "../components/catalog/Catalog";

const MainPage = () => {
  return (
    <div className="main__container">
      <Header />
      <Catalog/>
    </div>
  );
};
export default MainPage;
