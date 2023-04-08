import React from "react";
import "../assets/styles/contact.scss";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import JohnDoe from "../assets/img/Contact/people/1.png";
import William from "../assets/img/Contact/people/2.png";
import Julia from "../assets/img/Contact/people/3.png";

export default function Contact() {
  return (
    <>
      <section className="contact-banner">
        <h2>Let's talk</h2>
        <p>Leave a message, we love to hear from you!</p>
      </section>

      <section className="contact-details">
        <div className="details">
          <span>Get In Touch</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Offfice</h3>
          <div>
            <li>
              <FaMap className="icon" />
              <p>Floor 12A, Viwaseen Tower, 48 To Huu</p>
            </li>
            <li>
              <BsEnvelopeFill className="icon" />
              <p>contact@example.com</p>
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              <p>0987654321</p>
            </li>
            <li>
              <BsClockFill className="icon" />
              <p>Monday to Saturday: 9.00 to 17:00</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.865856544862!2d105.79294883570832!3d20.998013648803635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acba7ddb0f43%3A0xe7d7c05f85f830a!2zNDggUC4gVOG7kSBI4buvdSwgVHJ1bmcgVsSDbiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1672242242403!5m2!1svi!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="form-details">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your message"></textarea>
          <button type="button">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={JohnDoe} alt="JohnDoe" />
            <p>
              <span>John Doe</span>
              Senior Marketing Manager <br /> Phone: 0123456789 <br /> Email:
              demo@gmail.com
            </p>
          </div>
          <div>
            <img src={William} alt="William" />
            <p>
              <span>William Smith</span>
              Senior Marketing Manager
              <br /> Phone: 0123456789 <br />
              Email: demo@gmail.com
            </p>
          </div>
          <div>
            <img src={Julia} alt="Julia" />
            <p>
              <span>Julia</span>
              Senior Marketing Manager
              <br /> Phone: 0123456789
              <br /> Email: demo@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
