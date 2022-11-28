import React from "react";
import Header from "./components/header/header";
import SubscribeMessages from "./components/hoc/SubscribeMessages";
import Lc from "./components/lc/lc";
import Loading from "./components/loading/loading";
import Rc from "./components/rc/rc";
import "./scss/main.scss";

function App() {
  return (
    <div className="content__wrapper">
      <Loading/>
      <Header />
      <div className="content">
      <Lc/>
      <SubscribeMessages component={<Rc/>} />
      </div>
    </div>
  );
}

export default App;
