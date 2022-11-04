import React from "react";
import Header from "./components/header";
import Lc from "./components/lc";
import Rc from "./components/rc";
import "./scss/main.scss";

function App() {
  return (
    <div className="content__wrapper">
      <Header />
      <div className="content">
      <Lc/>
      <Rc/>
      </div>
    </div>
  );
}

export default App;
