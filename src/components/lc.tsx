import React from "react";
import s from "../scss/lc.module.scss";
import { observer } from "mobx-react-lite";
import UserCard from "./user_card";

const Lc = observer(()=>{

    return(
        <div className={s.content__lc}>
            <h2>Участники</h2>
            <UserCard username="Alex"/>
            <UserCard username="John"/>
            <UserCard username="Mishael"/>
            <UserCard username="David"/>
        </div>
    )
});
export default Lc;