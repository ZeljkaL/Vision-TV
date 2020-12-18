import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UpcomingContext } from "../UpcomingContext";
import Slider from "react-slick";
import hc from "../photos/premierre/hc.jpg";
import logo from "../photos/logo.png";
import Title from "./Title";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGoogleplus,
  IoLogoYoutube,
} from "react-icons/io";
const MoviePage = (props) => {
  const [upcomingMovies] = useContext(UpcomingContext);
  const movie_id = props.match.params.id;
  let mainCast;
  let [isClicked, setIsClicked] = useState(0);
  console.log(isClicked);
  function handleClicked() {
    return setIsClicked(!isClicked);
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    cssEase: "linear",
    arrows: false,
  };
  let movieTitle,
    movieGenre,
    movieDate,
    movieTrailer,
    movieCover,
    movieDescription,
    movieCast,
    movieStoryline,
    movieLocation,
    movieLanguage,
    movieCountry,
    movieCompany,
    movieDirector;
  //let m, n, movie_d, movie_g;
  upcomingMovies.map((movie) => {
    if (movie.id === movie_id) {
      let m = movie.cast[0];
      mainCast = m.castName;

      return (
        (movieTitle = movie.title),
        (movieGenre = movie.genre),
        (movieDate = movie.date),
        (movieTrailer = movie.trailer),
        (movieCover = movie.url),
        (movieDescription = movie.description),
        (movieCast = movie.cast),
        (movieStoryline = movie.storyline),
        (movieLocation = movie.location),
        (movieCountry = movie.country),
        (movieLanguage = movie.language),
        (movieCompany = movie.company),
        (movieDirector = movie.director)
      );
    }
    return (
      movieTitle,
      movieGenre,
      movieDate,
      movieTrailer,
      movieCover,
      movieDescription,
      movieCast,
      movieStoryline,
      movieLocation,
      movieCountry,
      movieLanguage,
      movieCompany,
      movieDirector
    );
  });
  console.log(movieCompany);

  return (
    <div className="movie-page">
      <div className="movie-hero">
        <div className="layer-over">
          <div className={isClicked ? "movies-nav active" : "movies-nav"}>
            <img src={logo} alt="logo" />
            <Link className="upcoming-link" to="/">
              Home
            </Link>
            {upcomingMovies.map((movie) => {
              return (
                <Link
                  key={movie.id}
                  className="upcoming-link"
                  to={`/${movie.id}`}
                >
                  {movie.title}
                </Link>
              );
            })}
            <h3 onClick={handleClicked}>
              <GiHamburgerMenu />
            </h3>
          </div>
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

          <div className="slider-content">
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

            <Slider {...settings}>
              {upcomingMovies.map((movie) => {
                return (
                  <div className="movie-hero-card">
                    <img src={movie.url} alt="card" />
                    <div className="img-layer"></div>
                    <h1>{movie.title}</h1>
                  </div>
                );
              })}
              <div className="movie-hero-card">
                <img src={hc} alt="card" />
                <div className="img-layer"></div>
                <h1>The Dry</h1>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="movie-content-bcg">
        <div className="movie-content">
          <Title title={movieTitle} />
          <div className="about-movie">
            <img src={movieCover} alt="hero" />
            <div className="movie-description">
              <p>{movieDescription}</p>
              <p>
                Movie Genre :<span> {movieGenre} </span>
              </p>
              <p>
                Director:
                <span> {movieDirector}</span>
              </p>
              <p>
                Release Date:
                <span> {movieDate}</span>
              </p>
            </div>
          </div>
          <div className="movie-trailer">
            <h1>#official HD trailer</h1>
            <video
              id="vid"
              src={movieTrailer}
              preload="true"
              controls={true}
            ></video>
            <h4>
              {movieTitle}
              <span>({mainCast})</span>
            </h4>
          </div>
          <div className="movie-details">
            <div className="movie-left">
              <h1>#celebrities spotlight #2021</h1>
              <div className="movie-cast">
                {movieCast.map((singleCast) => {
                  return (
                    <div className="cast-card">
                      <img src={singleCast.url} alt="cast" />
                      <p>{singleCast.castName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="movie-right">
              <h1>Storyline</h1>
              <p className="storyline">{movieStoryline}</p>
              <h1>Company Credits</h1>
              {movieCompany.map((item) => {
                return (
                  <p>
                    {" "}
                    Production Co:
                    <span> {item.credit} &gt;&gt;</span>
                  </p>
                );
              })}

              <h1>Details</h1>

              <p>
                Country: <span>{movieCountry}</span>
              </p>
              <p>
                Language: <span>{movieLanguage}</span>{" "}
              </p>
              <p>
                Release Date: <span>{movieDate}</span>
              </p>
              <p>
                Also known as: <span>{movieTitle}</span>
              </p>
              <p>
                Filming Locations: <span>{movieLocation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

/* <Link to="/">HOME</Link> */
