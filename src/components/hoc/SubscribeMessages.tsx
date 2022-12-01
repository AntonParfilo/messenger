import React, { useEffect } from "react";
import { useSubscription } from "@apollo/client";
import substriptions from "../../query/subscriptions";
import messages from "../../store/messages";

type propsType = {
  component: JSX.Element
}

const SubscribeMessages: React.FC<propsType> = (props) => {
  const { loading, error, data } = useSubscription(substriptions.subscribeMessages);

  useEffect(()=>{
    if(error) console.log("Что-то пошло не так...");
    if(!loading && data) messages.updateMessages(data.newMessage.data);
    else console.log("Ожидаем новые сообщения...");
  },[data]);

  return props.component;
};

export default SubscribeMessages;