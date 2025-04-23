import React from "react";
import OfficeImage1 from "../Assets/office 1.png";
import OfficeImage2 from "../Assets/office 2.jpg";
import OfficeImage3 from "../Assets/office 3.jpg";

const Choose = () => {
  return (
    <div className="choose-section-container">
      <div className="choose-section-top">
        <h1>Why Choose Us ____</h1>
      </div>
      <div className="choose-section-1">
        <div className="choose-img-1">
        <img src={OfficeImage1} alt=""/>
        </div>
        <div className="choose-text-1">
        <h1>Solutions Tailored Specifically to Your Business Needs</h1>
        <p>We provide customized solutions for your business needs, ensuring relevance and success.</p>
        <button>Read More</button>
        </div>
      </div>
      <div className="choose-section-2">
        <div className="choose-text-2">
        <h1>Creative Excellence Elevates Every Project</h1>
        <p>Creative excellence drives our work. From concept to execution, we aim for exceptional results.</p>
        <button>Read More</button>
        </div>
        <div className="choose-img-2">
        <img src={OfficeImage2} alt=""/>
        </div>
      </div>
      <div className="choose-section-3">
        <div className="choose-img-3">
        <img src={OfficeImage3} alt=""/>
        </div>
        <div className="choose-text-3">
        <h1>Client Satisfaction is Our Main Focus</h1>
        <p>Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together.</p>
        <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Choose;