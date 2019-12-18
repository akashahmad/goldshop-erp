import React, { useState } from 'react'
import Style from '../Notification/Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
import Signupform  from '../../Components/signUpHeader/signUpHeader'

export default()=>{
    return(


<div className="container-fluid Notification-customers">
        <div className="container-fluid notification-inner-content">

            <nav class="navbar-section2-dashboard navbar-expand-lg ">
                <div class="container-fluid notification-navbar-top">
      
                    <div className="notification-navbar-top-list">
                        <ul class="navbar-topnav-list navbar-nav ml-auto">
                            <li class="nav-item notification-image-search">
                                <a class="nav-link " href="#">
                                    <img src={Image1} alt=""/>
                                </a>
                            </li>
                            <div class="vertical-line-inside-navbar"></div>
                            <li class="nav-item notification-text-navbar-top">
                                <a class="nav-link fnt-poppins" href="#">Ahmed Wali</a>
                            </li>
                            <li class="nav-item notification-text-navbar-search">
                            <a class="nav-link " href="#">
                                    <img className="notification-person-image-navbar" src={Image2} alt=""/>
                                    
                                </a>
                            </li>
                        </ul></div>
                    </div>
               
            </nav>
            <div className="div-customer">
                <div className="customer_heading fnt-poppins">Profile</div>
                <div className="customer-heading-para fnt-poppins">Settings</div>

            </div>
    
</div>
                       
<Style/>
<Signupform/>
</div>
    )
}