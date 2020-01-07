import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signin from './Container/signin/Container'
import SignupAdmin from './Container/SignUp/signup';
import Routes from './RoutesContainer'
import {Provider} from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/common.css'
import './assets/style/style.css'
export default () => {
    return (
        <BrowserRouter>
            <Provider>
                <Switch>
                    <Route path="/login" component={Signin}/>
                    <Route path={"/signup-admin"} component={SignupAdmin}/>
                    <Route path={"/"} component={Routes}/>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}