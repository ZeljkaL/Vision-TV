import React from "react";
import MovieList from "./MovieList";
import Watchlist from "./Watchlist";
import SortBar from "./SortBar";
import Title from "./Title";

const ListContent = () => {
  return (
    <div id="movie-list" className="content">
      <Title title="Video Store" />
      <SortBar />
      <Watchlist />
      <MovieList />
    </div>
  );
};

export default ListContent;
