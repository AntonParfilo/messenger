import React from "react";
import SubscribeMessages from "../hoc/SubscribeMessages";
import Lc from "../lc/lc";
import Rc from "../rc/rc";

const ContentComponent = () => {
  return (
    <div className="content">
      <Lc />
      <SubscribeMessages component={<Rc />} />
    </div>
  );
};

export default ContentComponent;
