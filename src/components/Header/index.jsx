import React from "react";
import DropDown from "../Drop-down";
import Button from "../Button";

import fb from "../../assets/img/svg/icon-f.svg";
import tw from "../../assets/img/svg/icon-tw.svg";
import inst from "../../assets/img/svg/icon-inst.svg";
import user from "../../assets/img/users/user2.png";

import "./header.scss";

const navList = ["videos", "photos", "news", "trivia", "polls", "playbook"];

const Header = () => {
  return (
    <header className="header">
      <div className="main-wrapper">
        <div className="header-content">
          <div className="header-content--up">
            <a className="logotype">
              Scrap<span>Sports</span>
            </a>

            <form className="header-form-block">
              <DropDown
                head="All"
                list1="Videos"
                list2="Photos"
                list3="News"
                list4="Trivia"
                list5="Polls"
                classNameToggle="header-form-block--select"
              />
              <input type="text" name="search" id="" />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>

            <DropDown
              className="select-pages"
              head="ScrapPage"
              list1="pages 1"
              list2="pages 2"
              list3="pages 3"
              list4="pages 4"
              list5="pages 5"
            />

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

          <div className="header-content--down">
            <nav className="top-nav">
              <ul>
                {navList.map(item => {
                  return (
                    <li key={item} className="top-nav--list">
                      <a href="#" target="_blank" className="top-nav--link">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Button className="success-btn">Add content</Button>

            <div className="auth-block">
              <p className="auth-block--name">Lance Mackey</p>

              <div className="auth-block--img">
                <img src={user} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
