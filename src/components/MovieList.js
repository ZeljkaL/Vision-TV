import React, { useContext } from "react";
import Movie from "./Movie";
//import {MovieContext} from '../MovieContext'
import { ListContext } from "../ListContext";
import { SortedContext } from "../SortedContext";
import "react-multi-carousel/lib/styles.css";

const MovieList = () => {
  //  const [movies]=useContext(MovieContext)
  const [lists, setLists] = useContext(ListContext);
  const [sorted] = useContext(SortedContext);
  console.log(lists);
  return (
    <div className="movie-list">
      {sorted.map((movie, index) => {
        function addMovie() {
          if (movie.counter === 0) {
            movie.counter = 1;
            setLists((prevList) => [
              ...prevList,
              {
                name: movie.name,
                price: movie.price,
                id: index,
                counter: movie.counter,
                number_of_items: movie.number_of_items,
              },
            ]);
          }
        }

        return (
          <div key={movie.id}>
            <Movie
              handleClick={() => addMovie()}
              name={movie.name}
              type={movie.type}
              price={movie.price}
              vote={movie.vote}
              url={movie.url}
              isClicked={movie.counter}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
