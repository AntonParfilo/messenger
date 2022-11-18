import React, { useEffect } from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message";
import smessages from "../store/messages";
import { useQuery } from "@apollo/client";
import loadingState from "../store/loading";
import query from "../query/queries";

const Rc = observer(() => {
  
  const { loading, error, data } = useQuery(query.getMessages);

  if(error) {
    alert("Что-то пошло не так...");
  }
  useEffect(()=>{
    if(!loading){
      smessages.setMessages(data.getMessages);
      loadingState.swapLoadnig(false);
    }
    else loadingState.swapLoadnig(true);
  },[data]);

  const messagesView = smessages.messages.map((el) => {
    return (
      <>
      
      <Message key={Date.now()} username={el.username} message={el.message} date={el.date} />
      </>
    );
  });

    return (
      <div className={s.content__rc}>
        {loading || error?  null : messagesView}
      </div>
    )
  
});
export default Rc;
