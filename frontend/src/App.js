import React from "react";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
  );
}

export default App;
