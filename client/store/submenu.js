import {observable,action} from 'mobx'

export default class Submenu {
    @observable collapes = false
    @action suo(){
        this.collapes = !this.collapes
    }
}