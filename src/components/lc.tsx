import React from "react";
import s from "../scss/lc.module.scss";
import { observer } from "mobx-react-lite";
import UserCard from "./user_card";
import state from "../store/messages";
import SubscribeMessages from "./SubscribeMessages";

const Lc = observer(()=>{
    const users = state.users.map((el)=>{
        return <UserCard key={Date.now()} username={el.name}/>
    });
    return(
        <div className={s.content__lc}>
            <SubscribeMessages />
            <h2>Участники</h2>
            {users}
        </div>
    )
});
export default Lc;