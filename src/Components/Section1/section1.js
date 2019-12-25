import React, { useState, useEffect } from 'react'
import Style from './Style'
import { Link, useLocation } from 'react-router-dom'
import Image4 from '../../assects/images/setting.png'
import Image5 from '../../assects/images/logout1.png'
import ImageBell from '../../assects/images/bell.png'
import cookie from 'react-cookies'

export default () => {
    let location = useLocation().pathname;

    // navigation active handler
    const currentActive = (value) => {
        if(location==="/home" && value==="dashboard"){
            return "active"
        }else{
            return location.indexOf(value) === -1 ? "" : "active"
        }
    }

    const logout =()=>{
        localStorage.removeItem("token")
        let age =localStorage.getItem("age");
        cookie.remove('token',{
            maxAge:parseInt(age),
            path:"/"
        });
        localStorage.removeItem("age");
        window.location.replace("/")
    }
 
    // useEffect(()=>{
    //     let token=localStorage.getItem("token");
    //     // if(!token){
    //     //     window.location.replace("/signin")
    //     // }
    //     return !token ? window.location.replace("/signin"):"";
        
    // },[])
    return (
        // <div class="wrapper">

        <nav id="sidebar" className="sidebar">
            <div class="sidebar-header">
                <h3 className="logo-section1 fnt-poppins">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
                <Link to={"/home"}>
                    <li >

                        <div className={"image-div " + currentActive("dashboard")}>

                            <img className="image_icon " src={currentActive("dashboard")==="active"?require('../../assects/images/dashboardBlue.png'):require('../../assects/images/dashboard.png')} alt="" />
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
                        <img className="image_icon" src={currentActive("sign")==="active"?require('../../assects/images/settingBlue.png'):require('../../assects/images/setting.png')} alt="" />
                            <a href="#" className="sidenav-setting fnt-poppins">Setting</a></div>
                    </li>
                </Link>
                <Link to={"/notificationpage"}>
                    <li>
                        <div className={"image-div " + currentActive("notifica")}> <img className="image_icon" src={currentActive("notifica")==="active"?require('../../assects/images/bellblue.jpg'):require('../../assects/images/bell.png')} alt="" />
                            <a href="#" className="sidenav-setting fnt-poppins">Notifications</a></div>
                    </li>
                </Link>
            </ul>
            <ul class="list-unstyled components logout ">

                <li>
                    <div className="image-div-logout"> <img className="image_icon" src={Image5} alt="" />
                        <a href="#" className="sidenav-setting fnt-poppins" onClick={()=>{logout()}}>Log Out</a></div>
                </li>
            </ul>
            <Style />
        </nav>

        // </div>



    );
}