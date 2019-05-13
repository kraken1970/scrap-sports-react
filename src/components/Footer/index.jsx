import React from "react";

import fb from "../../assets/img/svg/icon-f.svg";
import tw from "../../assets/img/svg/icon-tw.svg";
import inst from "../../assets/img/svg/icon-inst.svg";
import "./footer.scss";

const group1 = ["Videos", "Photos", "News", "Trivia"];
const group2 = ["Playbook", "Post", "About", "Help & FAQ"];
const group3 = [
  "Contact us",
  "Advertising",
  "Conditions of use",
  "Privacy Policy"
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-wrapper">
        <div className="footer-content">
          <div className="footer-content--submit">
            <p className="submit-text">
              Subscribe our newsletter to receive exclusive offers and the
              latest sport news
            </p>

            <form className="footer-form">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="footer-form--input"
              />
              <button className="btn success-btn footer-btn">Subscribe</button>
            </form>
          </div>

          <div className="footer-content--nav">
            <div className="footer-logo">
              <a className="logotype footer-logotype">
                Scrap<span>Sports</span>
              </a>
              <p className="copyright">© 2019</p>
            </div>

            <div className="nav-groups">
              <div className="group group1">
                <ul>
                  {group1.map(item => {
                    return (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="group group2">
                <ul>
                  <ul>
                    {group2.map(item => {
                      return (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              </div>

              <div className="group group3">
                <ul>
                  <ul>
                    {group3.map(item => {
                      return (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              </div>
            </div>

            <div className="footer-social">
              <p className="footer-social--text">Follow</p>

              <div className="social-net">
                <a href="#">
                  <img src={fb} alt="facebook" />
                </a>
                <a href="#">
                  <img src={tw} alt="twitter" />
                </a>
                <a href="#">
                  <img src={inst} alt="inst" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
