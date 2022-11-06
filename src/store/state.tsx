import { makeAutoObservable } from "mobx";


interface storeIntreface {
    users: {name: string}[]
}
class store implements storeIntreface{
    constructor(){
        makeAutoObservable(this);
    }
    
    users = [
        {name: "Alex"},
        {name: "Boris"},
        {name: "Michael"},
        {name: "Anton"}
    ]
}
export default new store();