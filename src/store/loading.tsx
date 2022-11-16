import { makeAutoObservable } from "mobx";

class Loading {
  constructor() {
    makeAutoObservable(this);
  }

  isLoading: Boolean = false;

  swapLoadnig = (newState: Boolean) => {
    this.isLoading = newState;
  };

}
export default new Loading();
