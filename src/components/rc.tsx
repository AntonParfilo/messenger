import React, { useEffect } from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message";
import smessages from "../store/messages";
import { useQuery, gql } from "@apollo/client";
import loadingState from "../store/loading";

const Rc = observer(() => {
  
  const { loading, error, data } = useQuery(gql`
    query {
      getMessages {
        id
        username
        message
        date
      }
    }
  `);
 
  useEffect(()=>{
    if(!loading){
      smessages.setMessages(data.getMessages);
      loadingState.swapLoadnig(false);
    }
    else loadingState.swapLoadnig(true);
  },[data]);

  const messagesView = smessages.messages.map((el) => {
    return (
      <Message username={el.username} message={el.message} date={el.date} />
    );
  });

    return (
      <div className={s.content__rc}>
        {loading? null : messagesView}
      </div>
    )
  
});
export default Rc;
