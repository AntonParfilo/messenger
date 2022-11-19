import React from "react";
import { useSubscription } from "@apollo/client";
import substriptions from "../query/subscriptions";
import messages from "../store/messages";
import { observer } from "mobx-react-lite";

const SubscribeMessages = observer(() => {
    const { loading, error, data } = useSubscription(substriptions.subscribeMessages);
  if(error) alert("Что-то пошло не так...");
  loading ? console.log("Ожидаем новые сообщения...") : messages.updateMessages(data.newMessage);
  return <></>
});

export default SubscribeMessages;