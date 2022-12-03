import React from "react";
import s from "./about.module.scss";
import store from "../../images/react.png";
import space from "../../images/space.jpg";
import Project from "./project/project";

type projectsType={
  image: string,
  title: string,
  links: string[]
}

const About: React.FC = () => {

  const projectsData: Array<projectsType> = [
    {image: store, title: "Internet Store", links: ["http://react-home.pp.ua", "https://github.com/ragaban/React-project"]},
    {image: space, title: "Space Tourism", links: ["http://react-space.zzz.com.ua", "https://github.com/ragaban/Space"]}
  ];

  const projects: JSX.Element[] = projectsData.map((el, index)=>{
    return <Project key={index} image={el.image} title={el.title} links={el.links} />
  });

  return (
    <div className={s.about_wrapper}>
      <div className={s.about_content}>
        <div className={s.about_lc}>
          <div>
            <header>
              <h2>Client</h2>
            </header>
            <ul>
              <li>React</li>
              <li>Mobx</li>
              <li>TypeScript</li>
              <li>Apollo graphql client</li>
              <li>Apollo websocket</li>
            </ul>
          </div>
          <div>
            <header>
              <h2>Server</h2>
            </header>
            <ul>
              <li>Express</li>
              <li>ApolloServer</li>
              <li>WebSocketServer</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className={s.about_rc}>
          <div>
          <h2>Android</h2>
            <img src="data:image/png;base64,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" alt="img" />
          </div>
          <div>
          <h2>Apple</h2>
            <img src="data:image/png;base64,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" alt="img" />
          </div>
        </div>
      </div>
      <footer>
          <h2>Другие проекты на React.js</h2>
          <div className={s.footer__content}>
            {projects}
            
          </div>
      </footer>
    </div>
  );
};

export default About;
