import React from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message";
import state from "../store/state";

const Rc = observer(()=>{
    const messages = state.messages.map((el)=>{
        return <Message username={el.username} message={el.message} date={el.date} />
    }); 
    return(
        <div className={s.content__rc}>
         {messages}
        </div>
    )
});
export default Rc;