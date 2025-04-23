import React from "react";
import BannerBackground from "../Assets/back-ground.jpg";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            <span style={{color: 'rgb(155, 230, 65'}}>Boost</span> Your Brand With Innovative 
            <span style={{color: 'rgb(155, 230, 65'}}> Digital Marketing</span>
          </h1>
          <p className="primary-text">
          Drive Engagement and Conversions with Advanced Digital Marketing Strategies.
          </p>
          <button className="secondary-button">Start Now</button>
          <p className="secondary-text">
           <span style={{color: 'rgb(155, 230, 65'}}>____</span>  Trusted by thousand companies  
           <span style={{color: 'rgb(155, 230, 65'}}> ____</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;