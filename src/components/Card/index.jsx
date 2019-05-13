import React from "react";
import "./card.scss";

const Card = ({ src, text, style, styleBtn, styleTxt }) => {
  return (
    <div>
      <div className={`card videos-card ${style}`}>
        <div className="view overlay">
          <img
            className="card-img-top series-img-top"
            src={src}
            alt="series-video"
          />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body">
          <p className={`card-text ${styleTxt}`}>{text}</p>

          <div className={`card-buttons ${styleBtn}`}>
            <a
              href="#"
              className="btn btn-sm secondary-btn "
              title="Add Required!"
            >
              #Sport
            </a>
            <a
              href="#"
              className="btn btn-sm secondary-btn "
              title="Add Required!"
            >
              #Name
            </a>
            <a
              href="#"
              className="btn btn-sm secondary-btn "
              title="Add Required!"
            >
              #Organization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
