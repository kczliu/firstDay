import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom'
import Route from './config/router'
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider>
                <BrowserRouter>
                    <Route></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App