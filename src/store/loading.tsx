import { makeAutoObservable } from "mobx";

type LoadingState = {
  [key: string]: boolean
}

class Loading {
  constructor() {
    makeAutoObservable(this);
  }
  
  loadingState: LoadingState = {
    checkUser: false,
    registration: false,
    logout: false,
    getMessages: false,
    getUsers: false
  }

  isLoading: Boolean = false;

  setLoadnig = (type: string, newState: boolean) => {
    this.loadingState[type] = newState;
    let mwLoading: number = 0;
    for(let value in this.loadingState){
      if(this.loadingState[value]) mwLoading++;
    }
    mwLoading? this.isLoading = true : this.isLoading = false;
  };

}
export default new Loading();
