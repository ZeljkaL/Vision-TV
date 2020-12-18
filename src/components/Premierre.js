import React, { useContext } from "react";
import UpcomingMovie from "./UpcomingMovie";
import { UpcomingContext } from "../UpcomingContext";

const Premierre = () => {
  const [upcomingMovies] = useContext(UpcomingContext);

  return (
    <div id="upcoming-movies" className="upcoming-content">
      <div className="text">
        <p>#upcoming movies</p> <p>#premierre</p>
        <p>#TOP RANKED</p>
        <p>#2021</p>
      </div>
      <div className="premierre">
        {upcomingMovies.map((upcomingMovie) => {
          return (
            <div key={upcomingMovie.id}>
              <UpcomingMovie
                title={upcomingMovie.title}
                src={upcomingMovie.url}
                id={upcomingMovie.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Premierre;
