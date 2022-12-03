import { url } from "inspector";
import React from "react";
import s from "./project.module.scss";
type propsType={
    image: string,
    title: string,
    links: string[]
}

const Project: React.FC<propsType> = (props)=>{
    console.log(props)

    return(
        <div className={s.project}>
              <div className={s.project__image} style={{background: "url("+props.image+") no-repeat", backgroundSize: "cover"}}></div>
              <div className={s.project__tittle}>
                  {props.title}
              </div>
              <div className={s.project__links}>
                   <a href={props.links[0]} target="_blank">Перейти</a>
                   <a href={props.links[1]} target="_blank">GitHub репозиторий</a>
              </div>
        </div>
    )
}

export default Project;