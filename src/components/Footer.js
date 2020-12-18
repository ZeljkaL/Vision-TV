import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGoogleplus,
  IoLogoYoutube,
} from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";
import logo from "../photos/logo.png";
const Footer = () => {
  return (
    <div className="footer-bcg">
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={logo} alt="logo" />

          <p className="footer-links">
            <Link to="/">Home|</Link>

            <Link to="/top-gun">Top Gun: Maverick|</Link>

            <Link to="/jamie"> Jamie|</Link>

            <Link to="/spiral">Spiral|</Link>

            <a href="#news">News|</a>
            <a href="#contact">Contact</a>
          </p>

          <p className="footer-company-name">Vision TV © 2020</p>
        </div>

        <div id="contact" className="footer-center">
          <div>
            <i className="fa fa-map-marker">
              <FaMapMarker />
            </i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+111 525 155 35</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">visiontv@filmindustry.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#home">
              <IoLogoGoogleplus />
            </a>
            <a href="#home">
              <IoLogoInstagram />
            </a>
            <a href="#home">
              <IoLogoTwitter />
            </a>
            <a href="#home">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
