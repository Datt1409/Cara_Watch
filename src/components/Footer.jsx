import React from "react";
import logo from "../assets/img/logo.png";
import appstore from "../assets/img/Footer_img/app.jpg";
import googleplay from "../assets/img/Footer_img/play.jpg";
import payment from "../assets/img/Footer_img/pay.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../assets/styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="column">
        <img className="logo" src={logo} alt="Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> Floor 12A, Viwaseen Tower, 48 To Huu
        </p>
        <p>
          <strong>Phone:</strong> 0987654321
        </p>
        <p>
          <strong>Hour:</strong> 9:00 - 17:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon-wrapper">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <BsPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>

      <div className="column">
        <h4>About</h4>
        <NavLink className="nav-link" to="#">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="#">
          Delivery Information
        </NavLink>
        <NavLink className="nav-link" to="#">
          Privacy Policy
        </NavLink>
        <NavLink className="nav-link" to="#">
          Terms & Conditions
        </NavLink>
        <NavLink className="nav-link" to="#">
          Contact Us
        </NavLink>
      </div>

      <div className="column">
        <h4>My Account</h4>
        <NavLink className="nav-link" to="/login">
          Sign In
        </NavLink>
        <NavLink className="nav-link" to="cart">
          View Cart
        </NavLink>
        <NavLink className="nav-link" to="cart">
          My Wishlist
        </NavLink>
        <NavLink className="nav-link" to="cart">
          Track My Order
        </NavLink>
        <NavLink className="nav-link" to="#">
          Help
        </NavLink>
      </div>

      <div className="column install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="download">
          <img src={appstore} alt="App Store" />
          <img src={googleplay} alt="Google Play" />
        </div>
        <p>Secure Payment Gateways</p>
        <img src={payment} alt="Pay" />
      </div>
    </footer>
  );
}
