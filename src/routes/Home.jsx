import React from "react";
import "../assets/styles/home.scss";
import { HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import products from "../data/products";

export default function Home() {
  const menBestSellerItems = products.filter(
    (product) =>
      product.id === 3 ||
      product.id === 11 ||
      product.id === 16 ||
      product.id === 18
  );

  const womenBestSeller = products.filter(
    (product) =>
      product.id === 35 ||
      product.id === 33 ||
      product.id === 30 ||
      product.id === 36
  );

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

      <section className="best-seller">
        <h2>MEN'S BEST SELLERS</h2>
        <NavLink className="nav-link" to="/men">
          <p>
            View all <HiArrowSmRight className="right-icon" />
          </p>
        </NavLink>
        <div className="container">
          <div className="row">
            {menBestSellerItems.map((item) => (
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div id={item.id} class="product">
                  <img src={item.image} alt={item.title} />
                  <div class="add-wrapper">
                    <button class="add-to-cart">Add to cart</button>
                  </div>
                  <div class="description">
                    <span>{item.title}</span>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
