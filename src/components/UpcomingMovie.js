import React from "react";
import { Link } from "react-router-dom";
const UpcomingMovie = ({ src, title, id }) => {
  return (
    <div key={id} className="upcoming-movie-card">
      <img src={src} alt="movie-card" />
      <div className="img-layer"></div>

      <h3>{title}</h3>
      <Link className="link-btn" to={`/${id}`}>
        <div className="btn-read">Read More</div>
      </Link>
    </div>
  );
};

export default UpcomingMovie;
