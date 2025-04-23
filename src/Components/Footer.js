import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <p>Click It - is a leading digital marketing agency dedicated to driving success for businesses online. 
          With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI.
          In the USA, UK, and Canada working with top-tier clients, from start-ups to enterprises.</p>
        </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h3>Our Services</h3>
          <span>SEO Marketing</span>
          <span>Research Topic Trends</span>
          <span>Email Marketing</span>
          <span>Google PPC</span>
        </div>
        <div className="footer-section-columns">
          <h3>Our Location</h3>
          <span>USA</span>
          <span>UK</span>
          <span>Canada</span>
          <span>Virtual</span>
        </div>
        <div className="footer-section-columns">
          <h3>Contact Us</h3>
          <div className="footer-icons">
          <span><BsEnvelope /></span>
          <span><BsTelephone /></span>
          <span><BsTwitter /></span>
          <span><SiLinkedin /></span>
          <span><BsYoutube /></span>
          <span><FaFacebookF /></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;