import React, { useEffect, useRef } from "react";
import s from "./rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message/message";
import smessages from "../../store/messages";
import { useQuery } from "@apollo/client";
import loadingState from "../../store/loading";
import query from "../../query/queries";
import NewMessage from "./newMessage/new_message";
import user from "../../store/user";

type MessagesType = {
  username: string,
  message: string,
  date: string
}[];

const Rc: React.FC = observer(() => {

  let messages: MessagesType = smessages.messages;
  const { loading, error, data } = useQuery(query.getMessages);
  const messagesBlock = useRef<HTMLDivElement>(null);

  function isError() {
    console.log("Что-то пошло не так...");
  }
  if (error) {
    isError();
  }
  useEffect(() => {
    if (!loading) {
      smessages.setMessages(data.getMessages);
      loadingState.setLoadnig("getMessages", false);
    } else loadingState.setLoadnig("getMessages", true);
    setTimeout(()=>{
      messagesBlock.current?.scrollIntoView();
    },100);
  }, [data]);
  
 

  setTimeout(()=>{
    messagesBlock.current?.scrollIntoView({ behavior: "smooth" });
  },100);
  
  const messagesView: JSX.Element[] = messages.map((el, index) => {
    return (
      <Message
        key={index}
        username={el.username}
        message={el.message}
        date={el.date}
      />
    );
  });
  
  return (
    <div className={s.content__rc} style={ user.ifLogin? {paddingBottom: "100px"} : {paddingBottom: "55px"} }>
      <div className={s.messages}>
      {loading || error ? null : messagesView}
      <div ref={messagesBlock}></div>
      </div>
      <div className={s.footer}>
        <NewMessage />
      </div>
    </div>
  );
});
export default Rc;
