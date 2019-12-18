import React, { useState } from 'react'
import Style from '../Notification/Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
export default()=>{
    return(


<div className="container-fluid Notification-customers">
        <div className="container-fluid notification-inner-content">

            <nav class="navbar-section2-dashboard navbar-expand-lg ">
                <div class="container-fluid notification-navbar-top">
                {/* <div className="button-div-white">
                    <button type="button" className=" btn1">
                        Add Customer
                        {/* <span>Toggle Sidebar</span> */}
                    {/* </button></div> */} 
                    {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button> */}

                    <div className="notification-navbar-top-list">
                        <ul class="navbar-topnav-list navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <div id="google_translate_element">
                                        </div></a>
                            </li> */}
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
                {/* <div className="div-btn-white-wrapper btn-white-customers">
                 <button className="btn-Wh btn-white-customers fnt-poppins"> Add Customers</button>
                 </div> */}

            </div>
    
</div>
{/* <div className="container-fluid notification-table">
                    <div className="notification-rows">
                        <div className="n0tification-row1">today</div>
                        <div className="notification-row2">
                                    <div className="notification-row2-one">
                                        <p>John Doe's record deleted successfully.Wants to undo records?</p>
                                    </div>
                                    <div className="notification-row2-two">
                                        <p>30m</p>
                                        <button>Undo</button>
                                    </div>
                        </div>
                        <div className="notification-row3">
                                    <div className="notification-row3-one">
                                        <p>John Doe's record and money updated successfully.</p>
                                    </div>
                                    <div className="notification-row3-two">
                                        <p>3h</p>
                                    </div>
                        </div>
                        <div className="notification-row4">
                                    <div className="notification-row4-one">
                                        <p>Earlier</p>
                                    </div>
                                   
                        </div>
                    </div>
                    </div> */}
                       
<Style/>
</div>







        
    )
}