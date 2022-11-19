import React from "react";
import s from "../scss/lc.module.scss";
import { observer } from "mobx-react-lite";
import UserCard from "./user_card";
import state from "../store/messages";

const Lc = observer(()=>{
    const users = state.users.map((el, index)=>{
        return <UserCard key={index} username={el.name}/>
    });
    return(
        <div className={s.content__lc}>
            <h2>Участники</h2>
            {users}
        </div>
    )
});
export default Lc;

// {Math.floor(Math.random() * (999999 - 1))