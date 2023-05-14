/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="NavItems">
        <h1 className="logo">Clear Ponds</h1>

        <div className="menu_icons" onClick={handleClick}>
          <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>
        {/* Navlinks */}
        <ul className={clicked ? "NavMenu active" : "NavMenu"}>
          {MenuItems.map((NavItem, index) => {
            return (
              <li key={index}>
                <a className={NavItem.className} href="/">
                  <i class={NavItem.icon}></i>
                  {NavItem.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
