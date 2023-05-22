import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title" data-aos="zoom-in">Muhammad Ahmed</h1>

        <ul className="footer_list" data-aos="fade-down">
          <li>
            <a href="#about" className="footer_link" >
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social"  data-aos="fade-up">
          <a
            href="https://www.facebook.com/AHMED32122"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/khali_zero/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Muhamma24742337"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Muhammad Ahmed. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
