import React, {useEffect} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import cookie from "react-cookies";
import Signin from './Container/signin/Container'
import SignupAdmin from './Container/SignUp/signup';
import Routes from './RoutesContainer'
import {Provider} from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/common.css'
import './assets/style/style.css'
const App = (props) => {
    let {history, location} = props;
    useEffect(() => {
        let token = cookie.load("token");
        if (token) {
            if (location.pathname.indexOf("login") !== -1) {
                history.push("/dashboard");
            }else if(location.pathname.indexOf("signup") !== -1) {
                history.push("/dashboard");
            }
        }
    }, [location.pathname]);
    return (
        <Provider>
            <Switch>
                <Route path="/login" component={Signin}/>
                <Route path={"/signup-admin"} component={SignupAdmin}/>
                <Route path={"/"} component={Routes}/>
            </Switch>
        </Provider>
    );
}

export default withRouter(App);