import React from 'react'
import {
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'
import {
    inject,
    observer,
} from 'mobx-react'
import PropTypes from 'prop-types'

import Login from '../views/login/index.js'
import Home from '../views/home/index.js'

/*const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
    // debugger // eslint-disable-line
    return (
        <Route
            {...rest}
            render={
                (props) => (
                    isLogin ?
                        <Component {...props} /> :
                        <Redirect
                            to={{
                                pathname: '/user/login',
                                search: `?from=${rest.path}`, // eslint-disable-line
                            }}
                        />
                )
            }
        />
    )
}

const InjectedPrivateRoute = withRouter(inject(({ appState }) => {
    return {
        isLogin: appState.user.isLogin,
    }
})(observer(PrivateRoute)))

PrivateRoute.propTypes = {
    component: PropTypes.element.isRequired,
    isLogin: PropTypes.bool,
}

PrivateRoute.defaultProps = {
    isLogin: false,
}*/

export default () => [
    <Route path="/" exact render={() => <Redirect to="/login" />} key="/" />,
    <Route path="/login" exact key="login" component={Login} />,
]