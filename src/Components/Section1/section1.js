import React, {useState, useEffect} from 'react'
import Style from './Style'
import {Link, withRouter} from 'react-router-dom'
import Image4 from '../../assets/images/setting.png'
import Image5 from '../../assets/images/logout1.png'
import ImageBell from '../../assets/images/bell.png'
import cookie from 'react-cookies';

const SideNavigation = (props) => {
    let {location: routerLocation, history} = props;
    let location = routerLocation.pathname;

    // navigation active handler
    const currentActive = (value) => {
        if (location === "/dashboard" && value === "dashboard") {
            return "active"
        } else {
            return location.indexOf(value) === -1 ? "" : "active"
        }
    };

    const logout = () => {
        let age = localStorage.getItem("age");
        cookie.remove('token', {
            maxAge: parseInt(age),
            path: "/login"
        });
        localStorage.removeItem("age");
        history.push("/");
    };
    return (
        // <div class="wrapper">

        <nav id="sidebar" className="sidebar">
            <div class="sidebar-header">
                <h3 className="logo-section1 fnt-poppins">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
                <Link to={"/dashboard"}>
                    <li >

                        <div className={"image-div " + currentActive("dashboard")}>

                            <img className="image_icon "
                                 src={currentActive("dashboard") === "active" ? require('../../assets/images/dashboardBlue.png') : require('../../assets/images/dashboard.png')}
                                 alt=""/>
                            <a href="#" className="fnt-poppins ">DashBoard</a></div>

                    </li>

                </Link>

                <Link to={"/customers"}>
                    <li className="cus fnt-poppins">
                        <div className={"image-div " + currentActive("customer")}><img className="image_icon"
                                                                                       src={currentActive("customer") === "active" ? require('../../assets/images/customersActive.jpg') : require('../../assets/images/customer.png')}
                                                                                       alt=""/>
                            <a href="#" className="sidenav-customer fnt-poppins">Customers</a></div>
                    </li>

                </Link>


                <Link to={"/signup"}>
                    <li>
                        <div className={"image-div " + currentActive("sign")}>
                            <img className="image_icon"
                                 src={currentActive("sign") === "active" ? require('../../assets/images/settingBlue.png') : require('../../assets/images/setting.png')}
                                 alt=""/>
                            <a href="#" className="sidenav-setting fnt-poppins">Setting</a></div>
                    </li>
                </Link>
                <Link to={"/notification-page"}>
                    <li>
                        <div className={"image-div " + currentActive("notifica")}><img className="image_icon"
                                                                                       src={currentActive("notifica") === "active" ? require('../../assets/images/bellblue.jpg') : require('../../assets/images/bell.png')}
                                                                                       alt=""/>
                            <a href="#" className="sidenav-setting fnt-poppins">Notifications</a></div>
                    </li>
                </Link>
            </ul>
            <ul class="list-unstyled components logout ">

                <li>
                    <div className="image-div-logout"><img className="image_icon" src={Image5} alt=""/>
                        <a href="#" className="sidenav-setting fnt-poppins" onClick={() => {
                            logout()
                        }}>Log Out</a></div>
                </li>
            </ul>
            <Style />
        </nav>

        // </div>


    );
}

export  default  withRouter(SideNavigation);