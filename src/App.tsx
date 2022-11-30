import React from "react";
import ContentComponent from "./components/content/content";
import Header from "./components/header/header";
import SubscribeMessages from "./components/hoc/SubscribeMessages";
import Loading from "./components/loading/loading";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/about";

function App() {
  return (
    <div className="content__wrapper">
      <Loading/>
      <Header />
      <Router>
      <Routes>
          <Route path="/" element={<ContentComponent/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
