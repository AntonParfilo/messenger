import React from "react";
import { useSubscription } from "@apollo/client";
import substriptions from "../query/subscriptions";

const SubscribeMessages = () => {
    const { loading, error, data } = useSubscription(substriptions.subscribeMessages);
  console.log(loading)
  console.log(error)
  console.log(data)
  if(error) return <h1>Error!</h1>
  if(loading) return <h1>Loading!</h1>
  return <h1>Data!</h1>
}

export default SubscribeMessages;