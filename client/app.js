import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {BrowserRouter,HashRouter} from 'react-router-dom'
import Route from './config/router'
import {UserState,Submenu} from './store/index'
const userState = new UserState()
const submenu = new Submenu()
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider userState = {userState} submenu = {submenu}>
                <BrowserRouter>
                    <div style={{position:'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: '#f3f3f4',}}>
                        <Route></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App