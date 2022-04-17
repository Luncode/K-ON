import { action, makeAutoObservable, observable } from "mobx";

class Store {
    @observable public title = "Hello Mobx";
    constructor(){
     makeAutoObservable(this)
    }
    @action.bound
    public setTitle (val:string) {
        this.title = val
    }
}

const store = new Store();

export default store