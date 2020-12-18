import "./scss/App.css";
import { MovieProvider } from "./MovieContext";
import { ListProvider } from "./ListContext";
import { SortedProvider } from "./SortedContext";
import { UpcomingProvider } from "./UpcomingContext";
import { Route } from "react-router-dom";

import Hero from "./components/Hero";
import ListContent from "./components/ListContent";
import Celebrities from "./components/Celebrities";
import Premierre from "./components/Premierre";
import MoviePage from "./components/MoviePage";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  return (
    <MovieProvider>
      <SortedProvider>
        <ListProvider>
          <UpcomingProvider>
            <Route exact path="/">
              {" "}
              <Hero />
              <div className="pages-bcg">
                <div className="movie-premiere-holder">
                  <ListContent />

                  <Premierre />
                </div>

                <Celebrities />
              </div>
              <News />
            </Route>
            <Route exact path="/:id" component={MoviePage}></Route>
            <Footer />
          </UpcomingProvider>
        </ListProvider>
      </SortedProvider>
    </MovieProvider>
  );
}

export default App;
