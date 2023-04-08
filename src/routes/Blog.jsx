import React from "react";
import "../assets/styles/blog.scss";
import specialgift from "../assets/img/Gift/specialgift.png";
import wearing_tip from "../assets/img/Gift/wearing_tip.png";
import valentine from "../assets/img/Gift/valentine.png";
import perfume from "../assets/img/Gift/perfume.png";
import seasonSale from "../assets/img/Men/men_banner.png";
import { NavLink } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section className="blog-banner">
        <h2>Read more</h2>
        <p>Read about our blog!</p>
      </section>

      <section className="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={specialgift} alt="Gift" />
          </div>
          <div className="blog-details">
            <h3>Special Gift In 2023</h3>
            <NavLink className="nav-link" to="/">
              CONTINUE READING
            </NavLink>
          </div>
          <h1>16/02</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={wearing_tip} alt="wearing_tip" />
          </div>
          <div className="blog-details">
            <h3>Be More Confident With Clothe Wearing Tips</h3>
            <NavLink className="nav-link" to="/">
              CONTINUE READING
            </NavLink>
          </div>
          <h1>13/02</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={valentine} alt="valentine" />
          </div>
          <div className="blog-details">
            <h3>Best Valentine Wishes </h3>
            <p>To Write To Your Loved One</p>
            <NavLink className="nav-link" to="/">
              CONTINUE READING
            </NavLink>
          </div>
          <h1>16/02</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={perfume} alt="Gift" />
          </div>
          <div className="blog-details">
            <h3>Top 5 Best Perfume For Men In 2023</h3>
            <NavLink className="nav-link" to="/">
              CONTINUE READING
            </NavLink>
          </div>
          <h1>07/02</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={seasonSale} alt="seasonSale" />
          </div>
          <div className="blog-details">
            <h3>Season Sale</h3>
            <p>Winter Collection - Up to 30% OFF</p>
            <NavLink className="nav-link" to="/">
              CONTINUE READING
            </NavLink>
          </div>
          <h1>13/01</h1>
        </div>
      </section>
    </>
  );
}
