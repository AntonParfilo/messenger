import { makeAutoObservable } from "mobx";


interface storeIntreface {
  users: { name: string }[];
  messages: {
    username: string;
    message: string;
    date: string;
  }[];
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

}
export default new store();
