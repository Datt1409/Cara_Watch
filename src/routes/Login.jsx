import React from "react";
import "../assets/styles/login.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section class="forms-container">
        <div class="form login">
          <div class="form-content">
            <header>Login</header>
            <form action="#">
              <div class="field input-field">
                <input type="email" placeholder="Email" class="input" />
              </div>

              <div class="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  class="password"
                />
                <i class="bx bx-hide eye-icon"></i>
              </div>

              <div class="form-link">
                <NavLink to="#" class="forgot-pass">
                  Forgot password?
                </NavLink>
              </div>

              <div class="field button-field">
                <button>Login</button>
              </div>
            </form>

            <div class="form-link">
              <span>
                Don't have an account?
                <NavLink to="#" class="link signup-link">
                  Sign up
                </NavLink>
              </span>
            </div>
          </div>
        </div>

     
      </section>
    </>
  );
}
