import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-block">
            <h4>CONTACT US</h4>
            <small>+44 221 133 5360</small> <br />
            <small>customercare@mettamuse.com</small>
          </div>
          <div className="currency">
            <h4>CURRENCY</h4>
            <div className="usa-container">
              <img
                src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762065690/USA_img_l0iawd.jpg"
                alt="usa img"
              />
              <FaDiamond />
              <p>USD</p>
            </div>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-sub-bottom desk-media">
          <div className="footer-column">
            <h4>mettà muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="mobile-v-container">
          <div className="mobile-flex">
            <h4>mettà muse</h4>
            <h4>
              <FaAngleDown />
            </h4>
          </div>
          <hr />
          <div className="mobile-flex">
            <h4>QUICK LINKS</h4>
            <h4>
              <FaAngleDown />
            </h4>
          </div>
          <hr />
          <div className="mobile-flex">
            <h4>FOLLOW US</h4>
            <h4>
              <FaAngleDown />
            </h4>
          </div>
          <hr />
        </div>

        <div className="footer-column">
          <div className="desk-media">
            <h4>FOLLOW US</h4>
            <div className="social-icons-container">
              <FaInstagram className="social-icons" />
              <FaLinkedinIn className="social-icons" />
            </div>
          </div>

          <h4>mettà muse ACCEPTS</h4>
          <div className="payment-icons">
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762064085/google_pay_tq6dcd.png"
              alt="google pay with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762063903/master_card_wbhdkp.jpg"
              alt="master card with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762063593/paypal_pbiu4o.png"
              alt="paypal logo with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762063384/american-express_qa5ego.png"
              alt="american express logo with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762066518/apple_pay_rl48tk.png"
              alt="apple pay with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
            <img
              src="https://res.cloudinary.com/doitrxzrs/image/upload/v1762062399/opay_fi_15315413_bhnmp3.png"
              alt="Opay logo with stylized white O next to the word Pay in bold white text on a solid blue background"
            />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
