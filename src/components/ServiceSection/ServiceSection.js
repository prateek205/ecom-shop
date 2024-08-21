import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <>
      <div className="service_container">
        <div className="service_shipping">
          <div className="service_details">
            <i className="fas fa-truck"></i>
            <p>Super Fast and Free Delivery</p>
          </div>
        </div>

        <div className="service_contact">
          <div className="service_non-contact-details">
            <i className="fa-solid fa-shield-halved"></i>
            <p>Non-Contact Shipping</p>
          </div>
          <div className="service_assured">
            <i className="fa-solid fa-money-check"></i>
            <p>100% MoneyBack Guaranteed</p>
          </div>
        </div>

        <div className="service_payment">
          <div className="service_pay">
            <i className="fa-solid fa-credit-card"></i>
            <p>Secured Payment Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
