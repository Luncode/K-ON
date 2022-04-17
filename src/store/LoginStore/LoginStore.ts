import { makeAutoObservable, observable } from "mobx";

class LoginStore{
    //登录状态保存
    @observable public isLogin = false;
    constructor(){
        makeAutoObservable(this)
    }
}

const loginStore = new LoginStore();
export default loginStore;
