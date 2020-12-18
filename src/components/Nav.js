import React, { useState } from "react";
import logo from "../photos/logo.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Nav = () => {
  let [isClicked, setIsClicked] = useState(0);

  function handleClicked() {
    return setIsClicked(!isClicked);
  }
  console.log(isClicked);
  return (
    <div className="movies-nav">
      <div className={isClicked ? "nav-inner active" : "nav-inner"}>
        <img src={logo} alt={logo} />
        <div className="navbar" id="nav">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <a className="drop" href="#upcoming-movies">
              Upcoming Movies
              <i>
                <FaAngleDoubleDown />
              </i>
            </a>
            <div className="drop-content">
              <Link to="/top-gun">TOP GUN</Link>
              <Link to="/jamie">JAMIE</Link>
              <Link to="/spiral">SPIRAL</Link>
            </div>
          </div>
          <a href="#movie-list">Movies</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#Icon" className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <div className="btn">Sign Up</div>
        <h3 onClick={handleClicked}>
          <GiHamburgerMenu />
        </h3>
      </div>
    </div>
  );
};

export default Nav;
