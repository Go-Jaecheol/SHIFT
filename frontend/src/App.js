import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainPage from "./components/MainPage/MainPage";
import TeamPage from "./components/TeamPage/TeamPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainPage/>}
            />
            <Route
              path="/list/:team"
              element={(props) => <TeamPage {...props} />}
            />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
