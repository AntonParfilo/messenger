import { makeAutoObservable } from "mobx";


interface storeIntreface {
  users: { name: string }[];
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

  users = [
    { name: "Alex" },
    { name: "Boris" },
    { name: "Michael" },
    { name: "Anton" },
  ];

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
