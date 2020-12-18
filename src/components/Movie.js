import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
const Movie = ({ name, price, handleClick, url, isClicked, type, vote }) => {
  return (
    <div className="movie-card">
      <img src={url} alt="card" />
      <div className="movie-card-layer"></div>
      <div className="movie-desc">
        <h1>{name}</h1>
        <div className="desc">
          <h2>${price}</h2>

          <div className="star-movie">
            <p>
              <FaStar />
            </p>
            <span> {vote}</span>
            /10
          </div>
        </div>

        <div
          className={isClicked ? "btn-add clicked" : "btn-add"}
          onClick={handleClick}
        >
          <p className="add"> Add to</p> <p className="added">Added to</p>
          <span>
            <TiShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
