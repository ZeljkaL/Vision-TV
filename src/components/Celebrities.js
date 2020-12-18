import React, { useState } from "react";
import ActorCard from "./ActorCard";

//card photos
import img1 from "../photos/celebrities/1.jpg";
import img2 from "../photos/celebrities/2.jpg";
import img3 from "../photos/celebrities/3.jpg";
import img4 from "../photos/celebrities/4.jpg";
import img5 from "../photos/celebrities/5.jpg";
import img6 from "../photos/celebrities/6.jpg";
import img7 from "../photos/celebrities/7.jpg";
import img8 from "../photos/celebrities/8.jpg";
import img9 from "../photos/celebrities/9.jpg";
import img10 from "../photos/celebrities/10.jpg";
import img11 from "../photos/celebrities/11.jpg";
import img12 from "../photos/celebrities/12.jpg";
import img13 from "../photos/celebrities/13.jpg";
import img14 from "../photos/celebrities/14.jpg";
import img15 from "../photos/celebrities/15.jpg";
const Celebrities = () => {
  let [isFirst, setIsFirst] = useState(1);
  let [isSecond, setIsSecond] = useState(0);
  let [IsThird, setIsThird] = useState(0);

  function handleFirst() {
    setIsFirst(1);
    setIsSecond(0);
    setIsThird(0);
  }
  function handleSecond() {
    setIsFirst(0);
    setIsSecond(1);
    setIsThird(0);
  }
  function handleThird() {
    setIsFirst(0);
    setIsSecond(0);
    setIsThird(1);
  }

  return (
    <div className="celebrities-bcg">
      <div className="celeb-title">
        <h4 className={isFirst ? "title-active" : ""} onClick={handleFirst}>
          #TOP RATED
        </h4>
        <h4 className={isSecond ? "title-active" : ""} onClick={handleSecond}>
          #POPULAR
        </h4>{" "}
        <h4 className={IsThird ? "title-active" : ""} onClick={handleThird}>
          #HIGHEST PAID
        </h4>
      </div>
      <div
        className={
          isFirst ? "celebrities-content active" : "celebrities-content"
        }
      >
        <ActorCard name="Casey Affleck" job="actor" src={img1} />
        <ActorCard name="Cate Blanchett" job="actress" src={img2} />
        <ActorCard name="Johnny Depp" job="actor" src={img3} />
        <ActorCard name="Monicca Bellucci" job="actress" src={img4} />
        <ActorCard name="Ethan Hawke" job="actor" src={img5} />
        <ActorCard name="Gary Oldman" job="actor" src={img6} />
      </div>
      <div
        className={
          isSecond ? "celebrities-content active" : "celebrities-content"
        }
      >
        <ActorCard name="Gary Oldman" job="actor" src={img6} />
        <ActorCard name="Natalie Portman" job="actress" src={img7} />
        <ActorCard name="Anne Hathaway" job="actress" src={img8} />
        <ActorCard name="Chris Hemsworth" job="actor" src={img9} />
        <ActorCard name="Ryan Gosling" job="actor" src={img10} />
        <ActorCard name="Cate Blanchett" job="actress" src={img2} />
      </div>
      <div
        className={
          IsThird ? "celebrities-content active" : "celebrities-content"
        }
      >
        <ActorCard name="Robert De Niro" job="actor" src={img11} />
        <ActorCard name="Sharon Stone" job="actress" src={img12} />
        <ActorCard name="Robert Downey" job="actor" src={img13} />
        <ActorCard name="Nickole Kidman" job="actress" src={img14} />
        <ActorCard name="George Clooney" job="actor" src={img15} />
        <ActorCard name="Monicca Bellucci" job="actress" src={img4} />
      </div>
    </div>
  );
};
export default Celebrities;
