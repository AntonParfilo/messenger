import React from "react";
import s from "../scss/user_card.module.scss";
import { observer } from "mobx-react-lite";

type propsType = {
    username:string
}

const UserCard = observer((props: propsType)=>{
    let later = props.username[0];
    return(
       <div className={s.user__card}>
       <div className={s.user__img}><span>{later}</span></div>
       <span>{props.username}</span>
       </div>
    )
});
export default UserCard;