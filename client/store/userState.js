import {observe,action} from 'mobx'

export default class UserState {
    @observe user = {
        isLogin:false,
        userInfo:{}
    }
}