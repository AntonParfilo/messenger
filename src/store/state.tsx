import { makeAutoObservable } from "mobx";

class store{
    constructor(){
        makeAutoObservable(this);
    }
    
    users = [
        {name: "Alex" as string}
    ]
}
export default new store();