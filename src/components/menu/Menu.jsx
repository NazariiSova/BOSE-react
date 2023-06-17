import React from "react";
import "./Menu.scss";
import logo from "../img/logo.png";
import close from "../img/close.png";

const Menu = ({closeMenu }) =>{

return (
    <div className="menu__container">
        <div className="menu__icon">
            <img className="menu__icon-logo" src={logo} alt ="logo"/>
            <img className="menu__icon-close" onClick={closeMenu} src={close} alt ="close"/>
        </div>
        <ul className="menu__list">
            <li className="menu__list-item"><span>Home</span></li>
            <li className="menu__list-item"><span>recommended</span></li>
            <li className="menu__list-item"><span>Categories</span></li>
            <li className="menu__list-item"><span>How to buy</span></li>
        </ul>
    </div>
)
};
export default Menu;