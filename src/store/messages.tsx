import { makeAutoObservable } from "mobx";
import { useQuery, gql } from '@apollo/client';

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

  messages = [{id:1,username:"123",message:"123",date:"123"}];

  getMessages = ()=>{
    const { loading, error, data } = useQuery(gql`
    query{
      getMessages{
        id
        username
        message
        date
      }
    }
  `);
  console.log(error);
  console.log(loading);
  console.log(data);
  }
}
export default new store();
