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
                <a href="#" class="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div class="field button-field">
                <button>Login</button>
              </div>
            </form>

            <div class="form-link">
              <span>
                Don't have an account?
                <a href="#" class="link signup-link">
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* <div class="form signup">
          <div class="form-content">
            <header>Create account</header>
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
              <div class="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  class="password"
                />
                <i class="bx bx-hide eye-icon"></i>
              </div>

              <div class="field button-field">
                <button>Create</button>
              </div>
            </form>

            <div class="form-link">
              <span>
                Already have an account?
                <a href="#" class="link signup-link">
                  Log in
                </a>
              </span>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
