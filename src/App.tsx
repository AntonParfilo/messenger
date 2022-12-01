import React from "react";
import ContentComponent from "./components/content/content";
import Header from "./components/header/header";
import Loading from "./components/loading/loading";
import "./scss/main.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/about/about";

function App() {
  return (
    <BrowserRouter>
      <div className="content__wrapper">
        <Loading />
        <Header />
        <Routes>
          <Route path="/" element={<ContentComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
