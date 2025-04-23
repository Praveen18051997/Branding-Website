import React from "react";
import SEOMarketing from "../Assets/seo-marketing.png";
import ContentMarketing from "../Assets/content-marketing.png";
import SocialMediaManagement from "../Assets/social-media-management.png";
import PPC from "../Assets/ppc.png";
import EmailMarketing from "../Assets/email-marketing.png";


const Services = () => {
  const servicesInfoData = [
    {
      image: SEOMarketing,
      title: "SEO Marketing",
    },
    {
      image: ContentMarketing,
      title: "Content Marketing",
    },
    {
      image: SocialMediaManagement,
      title: "Social Media Management",
    },
    {
      image: PPC,
      title: "PPC",
    },
    {
      image: EmailMarketing,
      title: "Email Marketing",
    },
  ];
  return (
    <div className="services-section-wrapper">
      <div className="services-section-top">
        <h1 className="primary-heading">Services</h1>
        <p className="primary-text">
             Strategic services drive digital success with tailored, comprehensive approaches.
        </p>
      </div>
      <div className="services-section-bottom">
        {servicesInfoData.map((data) => (
          <div className="services-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;