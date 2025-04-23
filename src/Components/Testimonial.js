import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="testimonial-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Customer is Our Top Priority</h1>
        <p className="primary-text">
        We survey all of our clients, the results of which go directly to our CEO.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. 
        The team was able to bring my unique ideas to life and create a website that truly stands out.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;