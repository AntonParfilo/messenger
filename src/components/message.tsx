import { observer } from "mobx-react-lite";
import React from "react";
import s from "../scss/message.module.scss";
import UserIcon from "./user_icon";

type messageType = {
    username: string,
    message: string,
    date: string
}
const Message = observer((props: messageType) => {

  return (
    <div className={s.message__wrapper}>
      <UserIcon name={props.username} />
      <div className={s.message}>
        <div className={s.message__username}>{props.username}</div>
        <div className={s.message__text}>
            {props.message}
        </div>
        <div className={s.message_date}>{props.date}</div>
      </div>
    </div>
  );
});
export default Message;
