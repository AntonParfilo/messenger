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
    {
      username: "Alex",
      message: "Hello World",
      date: "18:56",
    },
    {
      username: "Boris",
      message: "Hello World!!!!",
      date: "18:57",
    },
    {
        username: "Антон",
        message: "Привет, это тестовое сообщение",
        date: "17:57",
      },
  ];
}
export default new store();
