import React, { useState } from "react";
import "./header.scss";
import logo from "../img/logo.png";
import menu from "../img/menu.png";
import menuHover from "../img/menuHover.png";
import sound from "../img/sound.png";




const Header = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handlerClick = () =>{
        console.log("click");
        setIsMenu(!isMenu) ;
    }
  return (
    <div className="header__container">
      <div className="header__top-box">
      <img className="header__top-logo" src={logo} alt="logo"/>
      <div className="header__top-menu" onClick={handlerClick}></div>
      </div>
      <div className="header__bottom-box">
      <div className="header__bottom-sound" ><img className="header__bottom-sound-img" src={sound} alt="sound"/></div>
      <div className="header__bottom-title">The world shades. <br/>Your music shines.</div>
      </div>
      {isMenu && <div>aslfhgouiyfrhigyifyhg7uyf</div>}
    </div>
  );
};
export default Header;
