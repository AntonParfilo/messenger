import React from "react";
import s from "../scss/user_card.module.scss";
import { observer } from "mobx-react-lite";
import UserIcon from "./user_icon";

type propsType = {
    username:string
}

const UserCard = observer((props: propsType)=>{
    return(
       <div className={s.user__card}>
        <UserIcon name={props.username} />
       <span>{props.username}</span>
       </div>
    )
});
export default UserCard;