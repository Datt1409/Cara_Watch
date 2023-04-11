import React from "react";
import "../assets/styles/cart.scss";
import US12 from "../assets/img/Men/Products/DETROIT/US12.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";

export default function Cart() {
  return (
    <>
      <section className="cart-banner">
        <h2>Let's talk</h2>
        <p>Leave a message, we love to hear from you</p>
      </section>

      <secion className="cart">
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={US12} alt="US12" />
              </td>
              <td>DETROIT US-12</td>
              <td>$140</td>
              <td>
                <AiOutlineMinus className="minus-icon" />
                <span>1</span>
                <AiOutlinePlus className="plus-icon" />
              </td>
              <td>$140</td>
              <td>
                <CiCircleRemove className="remove-icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </secion>

      <section className="purchase">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your coupon" />
            <button type="button">Apply</button>
          </div>
        </div>
        <div className="subtotal">
          <h3>Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td className="total-price">$140</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong class="total-price">140$</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="button">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
}
