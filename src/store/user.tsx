import { makeAutoObservable } from "mobx";


interface storeIntreface {
  users: { username: string, agent: string }[];
}
type newUser = {
  username: string;
  agent: string;
}
class store implements storeIntreface {
  constructor() {
    makeAutoObservable(this);
  }

  users = [
    { username: "null",
        agent: "null"
    },
  ];

  ifLogin:boolean = false;

  setIfLogin = (value:boolean)=>{
    this.ifLogin = value;
  }

  setUsers = (users: [])=>{
    this.users = users;
  }

  updateUsers = (users: newUser)=>{
    this.users.push(users);
  }

}
export default new store();
