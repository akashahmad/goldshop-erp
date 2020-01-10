import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import cookie from "react-cookies";
import Home from './Container/Homepage/Container';
import CustomerPage from './Container/CustomerPage/customer';
import CustomerTransaction from './Container/CustomerTransaction/customerTransaction';
import ViewGold from './Container/CustomersViewGoldPage/customerViewGold';
import Setting from './Container/Setting/Setting';
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
             <Route path={"/create-shop"} component={Setting}/>
            <Route path={"/customers"} component={CustomerPage}/>
            <Route path={"/notification-page"} component={NotificationPage}/>
            <Route path={"/customer-money-details/:id"} component={CustomerTransaction}/>
            <Route path={"/customer-gold-details/:id"} component={ViewGold}/>
            <Route path={"/dashboard"} component={Home }/>          
            <Route path={"/"} exact component={Home }/>
        </Switch>
    );
}
export default withRouter(Routes);