import { observer } from "mobx-react-lite";
import React from "react";
import s from "../scss/message.module.scss";

const Message = observer(()=>{

    return(
        <div className={s.qwerty}>
        message
        </div>
    )
});
export default Message;