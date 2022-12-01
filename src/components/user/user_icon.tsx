import React from "react";
import s from "./user_icon.module.scss";

type propsType = {
    username:string
}

function getRandomColor():{} {
    const letters:string = '0123456789ABCDEF';
    let color:string = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const newColor:Object = {
        background : color
    } 
    return newColor;
}

const UserIcon:React.FC<propsType> = (props):JSX.Element => {
    let letter:string = props.username[0].toUpperCase();
    return(
        <div style={getRandomColor()} className={s.user__img}><span>{letter}</span></div>
    )
}
export default UserIcon;