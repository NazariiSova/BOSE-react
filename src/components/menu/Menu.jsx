import React from "react";
import "./Menu.scss";
import logo from "../img/logo.png";
import close from "../img/close.png";

const Menu = ({closeMenu }) =>{
const handlerNav =(name) =>{
const box = document.getElementById(name);
if(!box){
    return;

}
closeMenu();
box.scrollIntoView({block:"nearest", behavior:"smooth"})

} 
return (
    <div className="menu__container">
        <div className="menu__icon">
            <img className="menu__icon-logo" src={logo} alt ="logo"/>
            <img className="menu__icon-close" onClick={closeMenu} src={close} alt ="close"/>
        </div>
        <ul className="menu__list">
            <li className="menu__list-item"><span onClick={()=>{handlerNav("home")}}>Home</span></li>
            <li className="menu__list-item"><span onClick={()=>{handlerNav("catalog")}}>recommended</span></li>
            <li className="menu__list-item"><span onClick={()=>{handlerNav("gallery")}}>Categories</span></li>
            <li className="menu__list-item"><span onClick={()=>{handlerNav("buy")}}>How to buy</span></li>
        </ul>
    </div>
)
};
export default Menu;