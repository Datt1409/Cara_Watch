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

  const womenBestSellerItems = products.filter(
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
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div id={item.id} className="product">
                  <img src={item.image} alt={item.title} />
                  <div className="add-wrapper">
                    <button className="add-to-cart">Add to cart</button>
                  </div>
                  <div className="description">
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

      <section className="body-banner">
        <h4>#COLOSSEUM</h4>
        <h2>COLOSSEUM COLLECTION</h2>
        <button>Explore more</button>
      </section>

      <section className="best-seller">
        <h2>WOMEN'S BEST SELLERS</h2>
        <NavLink className="nav-link" to="/women">
          <p>
            View all <HiArrowSmRight className="right-icon" />
          </p>
        </NavLink>
        <div className="container">
          <div className="row">
            {womenBestSellerItems.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div id={item.id} className="product">
                  <img src={item.image} alt={item.title} />
                  <div className="add-wrapper">
                    <button className="add-to-cart">Add to cart</button>
                  </div>
                  <div className="description">
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

      <section className="gift">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="gift-box">
                <h4>Best Valentine Wishes</h4>
                <h2>To Write To Your Loved One</h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="gift-box second">
                <h4>Top 5</h4>
                <h2>Best Perfume for Men</h2>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="collection-box">
                <h2>SEASON SALE</h2>
                <h5>Winter Collection - Up to 30% OFF</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="collection-box second">
                <h2>UPCOMING COLLECTION</h2>
                <h5>Spring/Summer 2023</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="collection-box third">
                <h2>Special Gift</h2>
                <h5>For This Valentine</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
