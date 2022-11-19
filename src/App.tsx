import React from "react";
import Header from "./components/header";
import Lc from "./components/lc";
import Loading from "./components/loading";
import Rc from "./components/rc";
import SubscribeMessages from "./components/SubscribeMessages";
import "./scss/main.scss";

function App() {
  return (
    <div className="content__wrapper">
      <SubscribeMessages />
      <Loading/>
      <Header />
      <div className="content">
      <Lc/>
      <Rc/>
      </div>
    </div>
  );
}

export default App;
