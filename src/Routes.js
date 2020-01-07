import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import cookie from "react-cookies";
import Home from './Container/Homepage/Container';
import CustomerPage from './Container/CustomerPage/customer';
import CustomerTransaction from './Container/CustomerTransaction/customerTransaction';
import ViewGold from './Container/CustomersViewGoldPage/customerViewGold';
import CreateShop from './Container/CreateNewShop/createShop';
import NotificationPage from '../src/Container/Notification/notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/common.css';
import './assets/style/style.css';
const Routes = (props) => {
    let {history, location, dispatch} = props;
    useEffect(() => {
        let token = cookie.load("token");
        if (!token) {
            setTimeout(() => {
                history.push("/login");
            }, 1000);
        } else {
            dispatch({
                type: "SET_LOADER",
                payload: false
            })
        }
    }, [location.pathname]);
    return (
        <Switch>
            <Route path={"/customerpage"} component={CustomerPage}/>
            <Route path={"/notificationpage"} component={NotificationPage}/>
            <Route path={"/customertransaction/:id"} component={CustomerTransaction}/>
            <Route path={"/viewgold/:id"} component={ViewGold}/>
            <Route path={"/dashboard"} component={Home }/>
            <Route path={"/home/:id"} component={Home}/>
            <Route path={"/createshop"} component={CreateShop}/>
        </Switch>
    );
}

export default withRouter(Routes);