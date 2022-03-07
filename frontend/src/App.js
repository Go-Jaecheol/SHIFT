import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainPage from "./components/MainPage/MainPage";
import TeamPage from "./components/TeamPage/TeamPage";
import SeatInfo from "./components/SeatInfo/SeatInfo";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route
              exact
              path="/"
              component={MainPage}
            />
            <Route
              exact
              path="/list/:team"
              component={(props) => <TeamPage {...props} />}
            />
            <Route
              exact
              path="/list/:team/:level"
              component={(props) => <SearchPage {...props} />}
            />
            <Route
              exact
              path="/seatinfo/:team/:section/:col/:num"
              component={(props) => <SeatInfo {...props} />}
            />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
