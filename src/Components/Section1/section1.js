import React, { useState, useEffect } from 'react'
import Style from './Style'
import { Link, useLocation } from 'react-router-dom'
import Image4 from '../../assects/images/setting.png'
import Image5 from '../../assects/images/logout1.png'
import ImageBell from '../../assects/images/bell.png'

export default () => {
    let location = useLocation().pathname;

    // navigation active handler
    const currentActive = (value) => {
        if(location==="/" && value==="dashboard"){
            return "active"
        }else{
            return location.indexOf(value) === -1 ? "" : "active"
        }
    }

    return (
        // <div class="wrapper">

        <nav id="sidebar" className="sidebar">
            <div class="sidebar-header">
                <h3 className="logo-section1 fnt-poppins">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
                <Link to={"/"}>
                    <li >

                        <div className={"image-div " + currentActive("dashboard")}>

                            <img className="image_icon " src={currentActive("dashboard")==="active"?require('../../assects/images/customer.png'):require('../../assects/images/dashboard.png')} alt="" />
                            <a href="#" className="fnt-poppins ">DashBoard</a></div>

                    </li>
                </Link>

                <Link to={"/customerpage"}>
                    <li className="cus fnt-poppins">

                        <div className={"image-div " + currentActive("customer")}> <img className="image_icon" src={currentActive("customer")==="active"?require('../../assects/images/customersActive.jpg'):require('../../assects/images/customer.png')} alt="" />
                            <a href="#" className="sidenav-customer fnt-poppins">Customers</a></div>
                    </li>
                </Link>
                <Link to={"/signup"}>
                    <li>
                        <div className={"image-div " + currentActive("sign")}> 
                        <img className="image_icon" src={Image4} alt="" />
                            <a href="#" className="sidenav-setting fnt-poppins">Setting</a></div>
                    </li>
                </Link>
                <Link to={"/notificationpage"}>
                    <li>
                        <div className={"image-div " + currentActive("notifica")}> <img className="image_icon" src={ImageBell} alt="" />
                            <a href="#" className="sidenav-setting fnt-poppins">Notifications</a></div>
                    </li>
                </Link>
            </ul>
            <ul class="list-unstyled components logout ">

                <li>
                    <div className="image-div-logout"> <img className="image_icon" src={Image5} alt="" />
                        <a href="#" className="sidenav-setting fnt-poppins">Log Out</a></div>
                </li>
            </ul>
            <Style />
        </nav>

        // </div>



    );
}