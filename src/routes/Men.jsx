import React, { useEffect, useState } from "react";
import "../assets/styles/men.scss";
import products from "../data/products";

export default function Men() {
  const [selectedBrand, setSelectedBrand] = useState("all");


  const menProducts =
    selectedBrand === "all"
      ? products.filter((product) => product.category === "Men")
      : products.filter(
          (product) =>
            product.category === "Men" && product.title === selectedBrand
        );

  const handleChange = (e) => {
    setSelectedBrand(e.target.value);
  };

 

 

  return (
    <>
      <section className="men-banner container-fluid"></section>;
      <h2 className="shop-heading">MEN'S WATCH</h2>
      <section className="filter container">
        <label>Collection:</label>
        <select id="product-filter" onChange={handleChange}>
          <option value="all">All</option>
          <option value="KASHMIR">Kashmir</option>
          <option value="WEIMAR">Weimar</option>
          <option value="DETROIT">Detroit</option>
          <option value="FUTURA">Futura</option>
          <option value="COLOSSEUM">Colosseum</option>
        </select>
      </section>
      <section className="best-seller container">
        <div className="container">
          <div className="row">
            {menProducts.map(({ id, title, name, price, image }) => (
              <div key={id} className=" col-lg-3 col-md-4 col-6">
                <div id={id} className="product">
                  <img src={image} alt={name} />
                  <div className="add-wrapper">
                    <button
                      id={id}
                      className="add-to-cart"
                      
                    >
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
