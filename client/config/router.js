import React from 'react'
import {
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import PropTypes from 'prop-types'

import Login from '../views/login/index.js'
import Home from '../views/home/index.js'

const PrivateRoute = ({isLogin,Component,...rest})=>{
    return(
        <Route
            {...rest}
            render ={
                props=>(
                    isLogin?<Component {...rest}></Component>:
                        <Redirect to={{pathname:'/login'}}></Redirect>
                )
            }
        ></Route>
    )
}

const InjectPrivateRoute = withRouter(inject((store)=>{
    console.log(store.userState.user.isLogin)
    return {
        isLogin:store.userState.user.isLogin
    }
})(observer(PrivateRoute)))

export default () => [
    <Route path="/" exact render={() => <Redirect to="/login" />} key="/" />,
    <Route path="/login" exact key="login" component={Login} />,
    <InjectPrivateRoute path="/home" Component={Home} key="home"></InjectPrivateRoute>
]
