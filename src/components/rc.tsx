import React, { useEffect } from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message";
import smessages from "../store/messages";
import { useQuery } from "@apollo/client";
import loadingState from "../store/loading";
import query from "../query/queries";
import { v4 as uuidv4, v4 } from 'uuid';


const Rc = observer(() => {
  
const { loading, error, data } = useQuery(query.getMessages);
  
function isError(){
  alert("Что-то пошло не так...");
}
  if(error) {
    isError();
  }
  useEffect(()=>{
    if(!loading){
      smessages.setMessages(data.getMessages);
      loadingState.swapLoadnig(false);
    }
    else loadingState.swapLoadnig(true);
  },[data]);
  const messagesView: JSX.Element[] = smessages.messages.map((el, index) => {
    return (
      <>
      <Message username={el.username} message={el.message} date={el.date} key={index} />
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
