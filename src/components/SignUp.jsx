import React from "react";
import "../assets/styles/signUp.scss";

export default function SignUp() {
  return (
    <section className="sign-up">
      <div className="news-text">
        <h3>Sign up for newsletters</h3>
        <p>
          Get E-mail updates about our latest shop and
          <span>special offers.</span>
        </p>
      </div>

      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button>Sign Up</button>
      </div>
    </section>
  );
}
