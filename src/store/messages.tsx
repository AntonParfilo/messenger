import { makeAutoObservable } from "mobx";


interface storeIntreface {
  messages: {
    username: string;
    message: string;
    date: string;
  }[];
}
type newMessage = {
  username: string;
  message: string;
  date: string;
}
class store implements storeIntreface {
  constructor() {
    makeAutoObservable(this);
  }

  messages = [
    {username: "null", message: "null", date: "null"}
  ];

  setMessages = (messages: [])=>{
    this.messages = messages;
  }

  updateMessages = (message: newMessage)=>{
    this.messages.push(message);
  }

}
export default new store();
