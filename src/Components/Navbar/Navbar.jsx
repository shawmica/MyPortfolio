import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // make sure the path is correct

import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="open" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close" />
        {["home", "about", "services", "certifications", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={70}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item === "about" ? "About Me" : item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
            {menu === item && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      <AnchorLink className="nav-connect" offset={70} href="#contact" onClick={() => setMenu("contact")}>
        Connect With Me
      </AnchorLink>
    </div>
  );
};

export default Navbar;
