import React from "react";

const ActorCard = ({ src, name, job }) => {
  return (
    <div className="actor-card">
      <img src={src} alt="actor" />
      <div className="paragraph">
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default ActorCard;
