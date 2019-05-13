import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";

import "./videos-page.scss";

import { seriosVideo, recomVideo, editorsVideo } from "../../data";

import vidPslaceholder from "../../assets/img/user-pages/videos-page/vid-placeholder.jpg";

const VideosPage = () => {
  return (
    <div>
      <Header />
      <main className="user-main">
        <section className="main-wrapper user-pages videos-page">
          <h3 className="pages-head">Videos</h3>

          <div className="all-videos">
            <div className="favorites-video">
              <img src={vidPslaceholder} alt="favorites-video" />
            </div>

            <div className="series-video">
              <h4>Top 10 Trending</h4>

              <div className="series-video--block">
                {seriosVideo.map(({ id, src, description }) => {
                  return (
                    <Card
                      key={id}
                      src={src}
                      text={description}
                      styleCard="series-card"
                    />
                  );
                })}
              </div>
            </div>
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
              {recomVideo.map(({ id, src, description }) => {
                return (
                  <Card
                    key={id}
                    src={src}
                    text={description}
                    styleCard="videos-card"
                  />
                );
              })}
            </div>
          </div>

          <div className="editors-choice main-wrapper tagged">
            <div className="block-header videos-header videos-page-header">
              <h4 className="block-header--title videos-header--title">
                Editor’s Choice
              </h4>
              <a href="#" className="block-header--link videos-header--link">
                show more
              </a>
            </div>

            <div className="block-cards videos-cards">
              {editorsVideo.map(({ id, src, description }) => {
                return (
                  <Card
                    key={id}
                    src={src}
                    text={description}
                    styleCard="videos-card"
                    styleBtn="hidden"
                    styleTxt="editor"
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
