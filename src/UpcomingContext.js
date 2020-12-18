import React, { useState, createContext } from "react";
import um1 from "./photos/premierre/1.jpg";
import um2 from "./photos/premierre/2.jpg";
import um3 from "./photos/premierre/3.jpg";
import w1 from "./photos/premierre/4.jpg";
import w2 from "./photos/premierre/5.jpg";
import w3 from "./photos/premierre/6.jpg";
import v1 from "./photos/premierre/1.mp4";
import v2 from "./photos/premierre/2.mp4";
import v3 from "./photos/premierre/3.mp4";
//cast
import c1 from "./photos/cast/spiral/1.jpg";
import c2 from "./photos/cast/spiral/2.webp";
import c3 from "./photos/cast/spiral/3.jpg";
import c4 from "./photos/cast/spiral/4.jpg";
import c5 from "./photos/cast/spiral/5.jpg";

import t1 from "./photos/cast/top gun/1.webp";
import t2 from "./photos/cast/top gun/2.jpg";
import t3 from "./photos/cast/top gun/3.jpg";
import t4 from "./photos/cast/top gun/4.jpg";
import t5 from "./photos/cast/top gun/5.jpg";

import j1 from "./photos/cast/jamie/1.jpg";
import j2 from "./photos/cast/jamie/2.jpg";
import j3 from "./photos/cast/jamie/3.jpg";
import j4 from "./photos/cast/jamie/4.jpg";
import j5 from "./photos/cast/jamie/5.jpg";
export const UpcomingContext = createContext();

export const UpcomingProvider = (props) => {
  const [upcomingMovies, setUpcomingMovies] = useState([
    {
      title: "Top Gun: Maverick",
      genre: "Action | Drama",
      director: "Joseph Kosinski",
      date: "02 July 2021",
      storyline:
        "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      company: [
        { credit: " Paramount Pictures" },
        { credit: " Jerry Bruckheimer Films" },
        { credit: " Skydance Media" },
      ],
      country: "USA | China",
      language: "English",
      location: "San Diego, California, USA ",
      trailer: v1,
      url: um1,
      wallpaper: w1,
      description:
        "Top Gun: Maverick is an upcoming American action drama film directed by Joseph Kosinski from a screenplay by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie and a story by Peter Craig and Justin Marks.[6] It is the sequel to 1986's Top Gun. The film stars Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris, and Val Kilmer. Cruise and Kilmer reprise their roles from the first film. Top Gun: Maverick is scheduled to be theatrically released in the United States on July 2, 2021, by Paramount Pictures.",
      cast: [
        { castName: "Tom Cruise as Captain Pete Maverick Mitchell", url: t1 },
        { castName: "Miles Teller as Lieutenant Bradley Rooster", url: t2 },
        { castName: "Jennifer Connelly as Penny Benjamin", url: t3 },
        { castName: "Jon Hamm as Vice Admiral Cyclone", url: t4 },
        { castName: "Glen Powell as Hangman", url: t5 },
      ],
      id: "top-gun",
    },
    {
      title: "Everybody's Talking About Jamie",
      genre: "Drama | Musical",
      director: "Jonathan Butterell",
      date: "26 February 2021",
      storyline:
        "Feature film adaptation of the musical about a teenager from Sheffield, England who wants to be a drag queen.",
      company: [
        { credit: " New Regency Productions" },
        { credit: "  Film4" },
        { credit: "  Warp Films" },
      ],
      country: " USA | UK",
      language: "English",
      location: " Sheffield, South Yorkshire, England, UK ",
      trailer: v2,
      url: um2,
      wallpaper: w2,
      description:
        "Everybody's Talking About Jamie is an upcoming musical drama film directed by Jonathan Butterell (in his feature directorial debut) from a screenplay by Tom MacRae based on the stage musical of the same name. The film stars Max Harwood, Sarah Lancashire, Lauren Patel, Shobna Gulati, Ralph Ineson, Adeel Akhtar, Samuel Bottomley, Sharon Horgan, and Richard E. Grant. Jamie New is a 16-year-old and doesn’t quite fit in. Instead of pursuing a real career he dreams of becoming a drag queen. Uncertain about his future, Jamie knows one thing for sure: he is going to be a sensation. Supported by his loving mom and his amazing friends, Jamie overcomes prejudice, beats the bullies and steps out of the darkness into the spotlight.",

      cast: [
        { castName: "Max Harwood as Jamie New", url: j1 },
        { castName: "Sarah Lancashire as Margaret New", url: j2 },
        { castName: "Lauren Patel as Pritti Pasha", url: j3 },
        { castName: "Shobna Gulati as Ray", url: j4 },
        { castName: "Ralph Ineson as Wayne New", url: j5 },
      ],
      id: "jamie",
    },

    {
      title: "Spiral: From the Book of Saw",
      genre: " Crime | Horror | Mystery | Thriller",
      director: "Darren Lynn Bousman",
      date: "21 May 2021",
      storyline:
        "Working in the shadow of an esteemed police veteran (Samuel L. Jackson), brash Detective Ezekiel Zeke Banks (Chris Rock) and his rookie partner (Max Minghella) take charge of a grisly investigation into murders that are eerily reminiscent of the city's gruesome past. Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer's morbid game.",
      company: [
        { credit: "  Twisted Pictures" },
        { credit: "  Burg/Koules Productions" },
        { credit: "  Canadian Film or Video Production Tax Credit (CPTC)" },
      ],
      country: " USA | Canada",
      language: "English",
      location: " Toronto, Ontario, Canada",
      trailer: v3,
      url: um3,
      wallpaper: w3,
      description:
        "Spiral (also known as Spiral: From the Book of Saw) is an upcoming American horror film directed by Darren Lynn Bousman, and written by Josh Stolberg and Peter Goldfinger.[4] It is the ninth installment in the Saw franchise and stars Chris Rock and Samuel L. Jackson. The film is scheduled to be released in the United States on May 21, 2021, by Lionsgate, after being delayed from its original release date of May 15, 2020.",
      cast: [
        { castName: "Chris Rock as Detective Ezekiel Banks", url: c1 },
        { castName: "Samuel L. Jackson as Marcus Banks", url: c2 },
        { castName: "Max Minghella as Detective William Schenk", url: c3 },
        { castName: "Marisol Nichols as Captain Angie Garza", url: c4 },
        { castName: "Zoie Palmer as Kara Boswick", url: c5 },
      ],
      id: "spiral",
    },
  ]);

  return (
    <UpcomingContext.Provider value={[upcomingMovies, setUpcomingMovies]}>
      {props.children}
    </UpcomingContext.Provider>
  );
};
