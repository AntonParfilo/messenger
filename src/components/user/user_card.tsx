import React from "react";
import s from "./user_card.module.scss";
import { observer } from "mobx-react-lite";
import UserIcon from "./user_icon";

type propsType = {
    username:string
    agent: string
}

const UserCard = observer((props: propsType)=>{
    return(
       <div className={s.user__card}>
        <UserIcon username={props.username} />
       <span>{props.username} ({props.agent})</span>
       </div>
    )
});
export default UserCard;