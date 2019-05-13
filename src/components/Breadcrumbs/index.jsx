import React from "react";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ link1, link2 }) => {
  return (
    <nav className="wrap-breadcrumbs main-wrapper">
      <ul className="breadcrumbs">
        <li className="breadcrumbs-item">
          <a href="#" className="breadcrumbs-link">
            {link1}
          </a>
        </li>
        <li className="breadcrumbs-item">
          <a href="#" className="breadcrumbs-link active">
            {link2}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
