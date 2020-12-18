import React, { useContext, useState } from "react";
import { MovieContext } from "../MovieContext";
import { SortedContext } from "../SortedContext";
import { FaStar } from "react-icons/fa";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const SortBar = () => {
  const [movies] = useContext(MovieContext);
  let [sorted, setSorted] = useContext(SortedContext);
  console.log(sorted);
  let [price, setPrice] = useState(25);
  let [vote, setVote] = useState(10);
  let [type, setType] = useState("all");
  let tempMovies = [...movies];
  let types = getUnique(movies, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  function handleChange(event) {
    type = event.target.value;
    setType(type);
    if (types !== "all") {
      tempMovies = tempMovies.filter((movie) => movie.type === type);
      setSorted(tempMovies);
    }

    if (type === "all") {
      setSorted(movies);
    }
  }

  function handlePrice(event) {
    let price_new = event.target.value;
    setPrice(price_new);
    if (price) {
      console.log(price);
      tempMovies = tempMovies.filter((movie) => parseInt(movie.price) <= price);

      setSorted(tempMovies);
    }
  }
  function handleVote(event) {
    let vote_new = event.target.value;
    setVote(vote_new);
    if (vote) {
      tempMovies = tempMovies.filter((movie) => movie.vote >= vote);

      setSorted(tempMovies);
    }
  }
  //pravi gresku, ne mozes apdejtovati u toku renderovanja
  if (price === 25 && type === "all" && vote === 10) {
    setSorted(movies);
  }

  return (
    <>
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type">movie genre</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {types}
          </select>
        </div>
        {/*end select type */}
        {/*price sort*/}
        <div className="form-group">
          <label htmlFor="price">movie price ${price}</label>
          <input
            className="range"
            name="price"
            id="price"
            value={price}
            type="range"
            min={5}
            max={25}
            onChange={handlePrice}
          ></input>
        </div>
        {/*end of price sort */}
        {/*star sort*/}
        <div className="form-group">
          <label htmlFor="vote">
            <span>
              movie vote
              <p>
                <FaStar />
              </p>
              {vote}
            </span>
          </label>
          <input
            className="range"
            name="vote"
            id="vote"
            value={vote}
            type="range"
            min={5}
            max={10}
            onChange={handleVote}
          ></input>
        </div>
        {/*end of star sort */}
      </form>
    </>
  );
};
export default SortBar;
