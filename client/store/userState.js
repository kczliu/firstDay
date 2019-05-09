import {observable,action} from 'mobx'

export default class UserState {
    @observable user = {
        isLogin:false,
        userInfo:{}
    }
    @action login(info){
        this.user.isLogin = true
        this.user.userInfo = info
    }
}