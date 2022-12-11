import React from "react";
import s from "./about.module.scss";
import store from "../../images/react.png";
import space from "../../images/space.jpg";
import Project from "./project/project";
import androidImage from "../../images/qr-android.png"

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
            <h2>React Native версия</h2>
            <img src={androidImage} alt="img" />
            <h3><a href="http://antoxa106.pp.ua/messenger.apk"> Скачать APK</a></h3>
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
