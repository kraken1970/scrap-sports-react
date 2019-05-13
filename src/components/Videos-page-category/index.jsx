import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import Card from "../Card";

import { recommendedVideo } from "../../data";

import "./Videos-page-category.scss";

const VideosPageCategory = () => {
  return (
    <>
      <Header />

      <main className="user-main page-category">
        <section className="main-wrapper user-pages videos-page">
          <div className="category-breadcrumbs">
            <Breadcrumbs link1="Videos" link2="Recommended" />
          </div>
          <div className="recommended main-wrapper tagged">
            <div className="block-header videos-header videos-page-header">
              <h4 className="block-header--title videos-header--title">
                Recommended
              </h4>
              <a href="#" className="block-header--link videos-header--link">
                show more
              </a>
            </div>

            <div className="block-cards videos-cards">
              {recommendedVideo.map(({ id, src, text }) => {
                return (
                  <Card
                    key={id}
                    src={src}
                    text={text}
                    styleCard="videos-card"
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VideosPageCategory;
