import React, { useState } from 'react'
import Style from './Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
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
                <div className="customer_heading fnt-poppins">Notification</div>
                <div className="customer-heading-para fnt-poppins">Panel</div>
            </div>
    
</div>
        <div id="ifmcontentstoprint" className="container-fluid notification-table">
        <table className="notification-table-inner">
          <tr className="notification-table-head fnt-poppins">
            <th >Today</th>
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td><strong>John Doe's</strong> record deleted successfully.Wants to undo records?</td></div> 
           <div className="notification-table-rows-row2"> <td>30m</td>
            <td><button className="btn-white-model">Undo</button></td></div>
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td><strong>John Doe's</strong> record and <strong> money</strong>  uploaded successfully.</td></div> 
           <div className="notification-table-rows-row2">
            <td>3h</td></div>
          </tr>
          <tr className="notification-table-head fnt-poppins">
          <th>Earlier</th>
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td><strong>New money</strong> added in John Doe's records successfully.</td></div> 
           <div className="notification-table-rows-row2">
            <td>14-Dec-2019</td></div>
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td><strong>New Gold </strong>added in John Doe's records successfully.</td></div> 
           <div className="notification-table-rows-row2">
            <td>8-Dec-2019</td></div> 
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td><strong>John Doe's</strong> records updated successfully.</td></div> 
           <div className="notification-table-rows-row2">
            <td>26-Nov-2019</td></div>
          </tr>
          <tr className="notification-table-rows fnt-poppins">
           <div className="notification-table-rows-row1"><td>new customer <strong>John Doe's</strong> added.</td></div> 
           <div className="notification-table-rows-row2">
            <td>24-Nov-2019</td></div>
          </tr>
        </table>
        </div>                 
<Style/>
</div>      
    )
}