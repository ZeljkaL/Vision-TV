import React from "react";
import selma from "../photos/selma.jpg";
const News = () => {
  return (
    <div id="news" className="news">
      <div className="topic-news">
        <h1>Latest News</h1>
        <div className="main-news">
          <img src={selma} alt="selma" />
          <div className="text">
            <h2>
              Salma Hayek Lets Pet Owl Perch On Her Head As They Decorated The
              Christmas Tree Together
            </h2>
            <p className="time">13 hours ago</p>
            <p>
              The holiday season has barely begun, but some celebrities started
              prepping the minute Halloween ended. Stars like{" "}
              <span>Madonna, Teresa Giudice, Cardi B</span> already have their
              houses decked out from Christmas from top to bottom. See how they,
              and other stars have decorated to celebrate Christmas 2020, from
              elaborate winter wonderlands, to towering trees, and more
              <span>...</span>
            </p>
          </div>
        </div>
      </div>
      <div className="other-news">
        <h2>More news on Vision TV</h2>
        <div className="news-grid">
          <div className="news-card">
            <h4>
              Enrique Iglesias & Anna Kournikova’s Twins, 3, Look So Grown Up &
              Cuter Than Ever{" "}
            </h4>
            <p>13 hours ago</p>
          </div>
          <div className="news-card">
            <h4>
              Gigi Hadid Debuts New Bangs After Snow Day Hair Makeover: See
              Before & After Pics
            </h4>
            <p>13 hours ago</p>
          </div>
          <div className="news-card">
            <h4>
              Gwen Stefani Cozies Up To Blake Shelton In Cowboy Hat & Pink Boots
              -- See Cute New Pic
            </h4>
            <p>13 hours ago</p>
          </div>
          <div className="news-card">
            <h4>
              Rebel Wilson & Jacob Busch ‘Bring Out The Best In Each Other’:
              Inside Their ‘Healthy’ Romance
            </h4>
            <p>13 hours ago</p>
          </div>
          <div className="news-card">
            <h4>
              Gigi Hadid Debuts New Bangs After Snow Day Hair Makeover: See
              Before & After Pics
            </h4>
            <p>13 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
