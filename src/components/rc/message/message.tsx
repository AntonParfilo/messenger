import { observer } from "mobx-react-lite";
import React from "react";
import s from "./message.module.scss";
import UserIcon from "../../user/user_icon";
import user from "../../../store/user";

type messageType = {
    username: string,
    message: string,
    date: string
}
const Message:React.FC<messageType> = observer((props) => {

  if(user.ifLogin){
    if(props.username === localStorage.getItem("username")){
      return (
        <div className={s.mymessage__wrapper}>
          <div className={s.message}>
            <div className={s.message__username}>{props.username}</div>
            <div className={s.message__text}>
                {props.message}
            </div>
            <div className={s.message_date}>{props.date}</div>
          </div>
          <UserIcon username={props.username} />
        </div>
      );
    }
  }

  return (
    <div className={s.message__wrapper}>
      <UserIcon username={props.username} />
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
