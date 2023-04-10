import React, { useState } from "react";
// import Image from "react";
import { NavLink } from "react-router-dom";
// import { Image } from "react-dom";
import logo from "../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";
import { BsHandbagFill, BsFillPersonFill } from "react-icons/bs";
import "../assets/styles/header.scss";

export default function Header() {
  const [cartQuantity, setCartQuantity] = useState(
    parseInt(localStorage.getItem("cartQuantity")) || 0
  );

  return (
    <header className="header container-fluid">
      <img src={logo} alt="logo" />

      <div className="nav_link_container">
        <NavLink className="nav_link" to="/">
          Home
        </NavLink>
        <NavLink className="nav_link " to="/men">
          Men
        </NavLink>
        <NavLink className="nav_link" to="/women">
          Women
        </NavLink>
        <NavLink className="nav_link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="nav_link" to="/contact">
          Contact
        </NavLink>
      </div>

      <div className="btn_container">
        <form className="search_form">
          <input type="text" placeholder="Search" className="search_input" />
          <FiSearch className="search_icon" />
        </form>

        <div className="cart_container">
          <NavLink to="/cart">
            <BsHandbagFill className="cart_icon" />
            <span className="cart_quantity">{cartQuantity}</span>
          </NavLink>
        </div>

        <div className="login_container">
          <NavLink to="/login">
            <BsFillPersonFill className="login_icon" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
