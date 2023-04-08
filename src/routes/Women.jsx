import React, { useState } from "react";
import products from "../data/products";
import "../assets/styles/women.scss";

export default function Women() {
  const [selectedBrand, setSelectedBrand] = useState("all");

  const womenProducts =
    selectedBrand === "all"
      ? products.filter((product) => product.category === "Women")
      : products.filter(
          (product) =>
            product.category === "Women" && product.title === selectedBrand
        );

  const handleChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <>
      <section className="women-banner container-fluid"></section>;
      <h2 className="shop-heading">WOMEN'S WATCH</h2>
      <section className="filter container">
        <label>Collection:</label>
        <select id="product-filter" onChange={handleChange}>
          <option value="all">All</option>
          <option value="HAMILTON">Hamilton</option>
          <option value="MELISSANI">Melissani</option>
          <option value="MORAINE">Moraine</option>
          <option value="SICILY">Sicily</option>
        </select>
      </section>
      <section className="best-seller container">
        <div className="container">
          <div className="row">
            {womenProducts.map(({ id, title, name, price, image }) => (
              <div key={id} className=" col-lg-3 col-md-4 col-6">
                <div id={id} className="product">
                  <img src={image} alt={name} />
                  <div className="add-wrapper">
                    <button id={id} className="add-to-cart">
                      Add to cart
                    </button>
                  </div>
                  <div className="description">
                    <span>{title}</span>
                    <h5>{name}</h5>
                    <h4>${price}</h4>
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
