import React, { useState, createContext } from "react";

//images
import img1 from "./photos/all_movies/1.jpg";
import img2 from "./photos/all_movies/2.jpg";
import img3 from "./photos/all_movies/3.jpg";
import img4 from "./photos/all_movies/4.jpg";
import img5 from "./photos/all_movies/5.png";
import img6 from "./photos/all_movies/6.jpg";
import img7 from "./photos/all_movies/7.jpg";
import img8 from "./photos/all_movies/8.jpg";
import img9 from "./photos/all_movies/9.jpg";
import img10 from "./photos/all_movies/10.jpg";
import img11 from "./photos/all_movies/11.jpg";
import img12 from "./photos/all_movies/12.jpg";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Blue Valentine",
      price: "10.99",
      url: img1,
      counter: 0,
      number_of_items: 1,
      type: "drama",
      vote: 7.9,
      id: 1,
    },

    {
      name: "Manchester By The Sea",
      price: "25",
      url: img2,
      counter: 0,
      number_of_items: 1,
      vote: 9.8,
      type: "thriller",
      id: 2,
    },
    {
      name: "The Paramedic",
      price: "5.99",
      url: img3,
      counter: 0,
      number_of_items: 1,
      vote: 7.4,
      type: "thriller",
      id: 3,
    },
    {
      name: "Me Before You",
      price: "11.05",
      url: img4,
      counter: 0,
      number_of_items: 1,
      vote: 7.1,
      type: "drama",
      id: 4,
    },
    {
      name: "Detachment",
      price: "12.20",
      url: img5,
      counter: 0,
      number_of_items: 1,
      vote: 9.3,
      type: "drama",
      id: 5,
    },
    {
      name: "Secret Window",
      price: "19.15",
      url: img6,
      counter: 0,
      number_of_items: 1,
      vote: 8.6,
      type: "thriller",
      id: 6,
    },
    {
      name: "The Jacket",
      price: "7.99",
      url: img7,
      counter: 0,
      number_of_items: 1,
      vote: 6.7,
      type: "drama",
      id: 7,
    },

    {
      name: "Remember Me",
      price: "17.50",
      url: img8,
      counter: 0,
      number_of_items: 1,
      vote: 8.9,
      type: "drama",
      id: 8,
    },
    {
      name: "Invisible Guest",
      price: "9.99",
      url: img9,
      counter: 0,
      number_of_items: 1,
      vote: 8.4,
      type: "thriller",
      id: 9,
    },
    {
      name: "All Good Things",
      price: "6.89",
      url: img10,
      counter: 0,
      number_of_items: 1,
      vote: 7.1,
      type: "drama",
      id: 10,
    },
    {
      name: "Leon The Professional",
      price: "25",
      url: img11,
      counter: 0,
      number_of_items: 1,
      vote: 10,
      type: "action",
      id: 11,
    },
    {
      name: "La La Land",
      price: "14.55",
      url: img12,
      counter: 0,
      number_of_items: 1,
      vote: 8.7,
      type: "drama",
      id: 12,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
