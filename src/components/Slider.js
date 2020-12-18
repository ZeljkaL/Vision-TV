import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGoogleplus,
  IoLogoYoutube,
} from "react-icons/io";

//photos
import img1 from "../photos/movies/1.jpg";
import img2 from "../photos/movies/2.jpg";
import img3 from "../photos/movies/3.jpg";
import img4 from "../photos/movies/4.jpg";
import img5 from "../photos/movies/5.jpg";
import img6 from "../photos/movies/6.jpg";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 300,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="slider-bcg">
        <div className="container">
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <div className="follow-us">
            <h3>Follow Us:</h3>
            <h2>
              <IoLogoTwitter />
            </h2>{" "}
            <h2>
              <IoLogoInstagram />
            </h2>{" "}
            <h2>
              <IoLogoGoogleplus />
            </h2>
            <h2>
              <IoLogoYoutube />
            </h2>
          </div>
          <Slider {...settings}>
            <Card
              src={img1}
              genre="thriller"
              title="Project Power"
              vote={9.8}
            />
            <Card
              src={img2}
              genre="action"
              title="Spenser Confidential"
              vote={9.1}
            />
            <Card src={img3} genre="sci-fi" title="Legion" vote={10} />
            <Card src={img4} genre="thriller" title="Polar" vote={7.8} />
            <Card src={img5} genre="drama" title="Fractured" vote={7.8} />
            <Card src={img6} genre="action" title="The Old Guard" vote={8.3} />
          </Slider>
        </div>
      </div>
    );
  }
}
