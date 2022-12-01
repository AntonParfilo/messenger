import React from "react";
import s from "./about.module.scss";

const About: React.FC = () => {
  return (
    <div className={s.about_wrapper}>
      <header>
        <h3>Stack</h3>
      </header>
      <div className={s.about_content}>
        <div className={s.about_lc}>
          <header>
            <h3>Client</h3>
          </header>
          <ul>
            <li>React</li>
            <li>Mobx</li>
            <li>TypeScript</li>
            <li>Apollo graphql client</li>
            <li>Apollo websocket</li>
          </ul>
        </div>
        <div className={s.about_rc}>
          <header>
            <h3>Server</h3>
          </header>
          <ul>
            <li>Express</li>
            <li>ApolloServer</li>
            <li>WebSocketServer</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
