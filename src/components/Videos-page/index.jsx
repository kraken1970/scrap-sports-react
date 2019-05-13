import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";

import "./videos-page.scss";

import vidPslaceholder from "../../assets/img/user-pages/videos-page/vid-placeholder.jpg";
import seriosVideo1 from "../../assets/img/user-pages/videos-page/top10-1.jpg";
import seriosVideo2 from "../../assets/img/user-pages/videos-page/top10-2.jpg";
import seriosVideo3 from "../../assets/img/user-pages/videos-page/top10-3.jpg";
import seriosVideo4 from "../../assets/img/user-pages/videos-page/top10-1.jpg";
import seriosVideo5 from "../../assets/img/user-pages/videos-page/top10-2.jpg";

import recVideo1 from "../../assets/img/user-pages/videos-page/rec1.jpg";
import recVideo2 from "../../assets/img/user-pages/videos-page/rec2.jpg";
import recVideo3 from "../../assets/img/user-pages/videos-page/rec3.jpg";
import recVideo4 from "../../assets/img/user-pages/videos-page/rec4.jpg";

import editVideo1 from "../../assets/img/user-pages/videos-page/edit1.jpg";
import editVideo2 from "../../assets/img/user-pages/videos-page/edit2.jpg";
import editVideo3 from "../../assets/img/user-pages/videos-page/edit3.jpg";
import editVideo4 from "../../assets/img/user-pages/videos-page/edit4.jpg";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do";
const textRecommended =
  "The Golden State Killer is believed to be linked to more t";

const textEditor = "The Golden State Killer is believed to be linked to more t";

const seriosVideo = [
  { id: "01", src: seriosVideo1, description: text },
  { id: "02", src: seriosVideo2, description: text },
  { id: "03", src: seriosVideo3, description: text },
  { id: "04", src: seriosVideo4, description: text },
  { id: "05", src: seriosVideo5, description: text }
];

const recommendedVideo = [
  { id: "01", src: recVideo1, description: textRecommended },
  { id: "02", src: recVideo2, description: textRecommended },
  { id: "03", src: recVideo3, description: textRecommended },
  { id: "04", src: recVideo4, description: textRecommended }
];

const editorsVideo = [
  { id: "01", src: editVideo1, description: textEditor },
  { id: "02", src: editVideo2, description: textEditor },
  { id: "03", src: editVideo3, description: textEditor },
  { id: "04", src: editVideo4, description: textEditor }
];

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
                      style="series-card"
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
              {recommendedVideo.map(({ id, src, description }) => {
                return (
                  <Card
                    key={id}
                    src={src}
                    text={description}
                    style="videos-card"
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
                    style="videos-card"
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
