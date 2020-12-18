import React from "react";

import { FaStar } from "react-icons/fa";
const Card = ({ src, genre, title, vote }) => {
  let genre_clr;
  if (genre === "drama") {
    genre_clr = <div className="genre red">{genre}</div>;
  }
  if (genre === "thriller") {
    genre_clr = <div className="genre blue">{genre}</div>;
  }
  if (genre === "action") {
    genre_clr = <div className="genre orange">{genre}</div>;
  }
  if (genre === "sci-fi") {
    genre_clr = <div className="genre green">{genre}</div>;
  }
  return (
    <div className="card">
      <img src={src} alt="card" />
      <div className="black-layer"></div>
      <div className="description">
        {genre_clr}
        <h1 className="title">{title}</h1>
        <div className="vote">
          <h3>
            <FaStar />
          </h3>
          <h2>
            <span>{vote}</span>/10
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
