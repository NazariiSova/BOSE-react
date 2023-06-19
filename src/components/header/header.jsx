import React, { useState } from "react";
import "./header.scss";
import logo from "../img/logo.png";
import sound from "../img/sound.png";
import Menu from "../menu/Menu.jsx";




const Header = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handlerClick = () =>{
        console.log("click");
        setIsMenu(!isMenu) ;
    }
  return (
    <div className="header__container" id="home">
      <div className="header__top-box">
      <img className="header__top-logo" src={logo} alt="logo"/>
      <div className="header__top-menu" onClick={handlerClick}></div>
      </div>
      <div className="header__bottom-box">
      <div className="header__bottom-sound" ><img className="header__bottom-sound-img" src={sound} alt="sound"/></div>
      <div className="header__bottom-title">The world shades. <br/>Your music shines.</div>
      </div>
      {isMenu && <Menu closeMenu={handlerClick} />}
    </div>
  );
};
export default Header;
