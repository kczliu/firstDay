import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {BrowserRouter,HashRouter} from 'react-router-dom'
import Route from './config/router'
import {UserState} from './store/index'
const userState = new UserState()
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider userState = {userState}>
                <BrowserRouter>
                    <Route></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App