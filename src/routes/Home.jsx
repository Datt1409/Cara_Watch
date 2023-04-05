import React from "react";
import "../assets/styles/home.scss";
import { HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="banner">
        <h4>New Men Collection</h4>
        <h2>KASHMIR</h2>
        <button>Shop now</button>
      </section>

      <section className="category">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="category-card first">
                <h3>Men's Watch</h3>
                <NavLink className="category-link" to="/men">
                  <HiArrowSmRight className="right-icon" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="category-card second">
                <h3>Women's Watch</h3>
                <NavLink className="category-link" to="/women">
                  <HiArrowSmRight className="right-icon" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12">
              <div className="category-card third">
                <h3>Accessories</h3>
                <NavLink className="category-link" to="/">
                  <HiArrowSmRight className="right-icon" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-seller men">
        <h2>MEN'S BEST SELLERS</h2>
        <NavLink to="/en">
          <p>
            View all <HiArrowSmRight className="right-icon" />
          </p>
        </NavLink>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="product">
                <img src="/images/KASHMIR/calm.png" alt="Kashmir Calm" />
                <div className="add-wrapper">
                  <button className="add-to-cart">Add to cart</button>
                </div>
                <div className="description">
                  <span>KASHMIR</span>
                  <h5>CALM</h5>
                  <h4>2.399.000 đ</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="product">
                <img src="/images/WEIMAR/heinz.png" alt="Weimar Heinz" />
                <div className="add-wrapper">
                  <button className="add-to-cart">Add to cart</button>
                </div>
                <div className="description">
                  <span>WEIMAR</span>
                  <h5>HEINZ</h5>
                  <h4>2.599.000 đ</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="product">
                <img src="/images/DETROIT/I275.png" alt="Detroit I-275" />
                <div className="add-wrapper">
                  <button className="add-to-cart">Add to cart</button>
                </div>
                <div className="description">
                  <span>DETROIT</span>
                  <h5>I-275</h5>
                  <h4>3.399.000 đ</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="product">
                <img src="/images/DETROIT/8mile.png" alt="Detroit 8 MILE" />
                <div className="add-wrapper">
                  <button className="add-to-cart">Add to cart</button>
                </div>
                <div className="description">
                  <span>DETROIT</span>
                  <h5>8 MILE</h5>
                  <h4>2.899.000 đ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
