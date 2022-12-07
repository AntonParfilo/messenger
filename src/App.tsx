import React from "react";
import ContentComponent from "./components/content/content";
import Header from "./components/header/header";
import Loading from "./components/loading/loading";
import "./scss/main.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/about/about";
const basename = document.querySelector('base')?.getAttribute('href') ?? '/';
function App() {
  return (
    <BrowserRouter basename={basename} >
      <div className="content__wrapper">
        <Loading />
        <Header />
        <Routes>
          <Route path="/messenger/" element={<ContentComponent />} />
          <Route path="/messenger/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
