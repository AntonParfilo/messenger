import React from "react";
import s from "./button.module.scss";

type propsBut = {
    message:string,
    width:string,
    onclick: any
}
const Button: React.FC<propsBut> = (props) => {

    return(
        <button onClick={()=> props.onclick()} className={s.my_but} style={{width: props.width}}>{props.message}</button>
    )
}
export default Button;