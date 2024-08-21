import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer">
          <div className="footer_details">
            <div className="footer_about">
              <div className="footer_heading">
                <p>About</p>
              </div>
              <div className="footer_list">
                <ul>
                  <li>Contact Us</li>
                </ul>
                <ul>
                  <li>About Us</li>
                </ul>
                <ul>
                  <li>Careers</li>
                </ul>
              </div>
            </div>

            <div className="footer_grpCompany">
              <div className="footer_heading">
                <p>Group Companies</p>
              </div>
              <div className="footer_list">
                <ul>
                  <li>Redmi</li>
                </ul>
                <ul>
                  <li>Samsung</li>
                </ul>
                <ul>
                  <li>Apple</li>
                </ul>
              </div>
            </div>

            <div className="footer_help">
              <div className="footer_heading">
                <p>Help</p>
              </div>
              <div className="footer_list">
                <ul>
                  <li>Payments</li>
                </ul>
                <ul>
                  <li>Shipping</li>
                </ul>
                <ul>
                  <li>Returns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer_detailing">
            <div className="footer_mail">
              <div className="footer_heading">
                <p>Mail Us</p>
              </div>
              <div className="footer_mail_detail">
                <p>prateekbahad@gmail.com</p>
              </div>
            </div>

            <div className="footer_social">
              <div className="footer_heading">
                <p>Social Media</p>
              </div>
              <div className="footer_social_list">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_copyright">
            <div className="footer_copy_heading">
                <p>2023 - 2024 <i className="far fa-copyright"></i> Copyright <i className="fas fa-heart"></i> Prateek Bahad</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
