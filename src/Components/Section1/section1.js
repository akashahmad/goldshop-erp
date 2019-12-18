import React from 'react'
import Style from './Style'
import Image from '../../assects/images/dashboard.png'
import Image3 from '../../assects/images/customer.png'
import Image4 from '../../assects/images/setting.png'
import Image5 from '../../assects/images/logout1.png'
import ImageBell from '../../assects/images/bell.png'

export default()=>{
    return(
        // <div class="wrapper">
        
        <nav id="sidebar" className="sidebar">
            <div class="sidebar-header">
                <h3 className="logo-section1">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
              
                <li>
                       <div className="image-div "> 
                       
                       <img className="image_icon active" src={Image} alt=""/>    
                             <a href="#" className="fnt-poppins">DashBoard</a></div> 
                    
                </li>
              
                <li className="cus fnt-poppins">
               
                <div className="image-div"> <img className="image_icon" src={Image3} alt=""/>  
                             <a href="#" className="sidenav-customer fnt-poppins">Customers</a></div> 
                </li>
                
                <li>
                <div className="image-div"> <img className="image_icon" src={Image4} alt=""/>    
                             <a href="#" className="sidenav-setting fnt-poppins">Setting</a></div> 
                </li> 
                <li>
                <div className="image-div"> <img className="image_icon" src={ImageBell} alt=""/>    
                             <a href="#" className="sidenav-setting fnt-poppins">Notifications</a></div> 
                </li>
            </ul>
            <ul class="list-unstyled components logout ">

            <li>
            <div className="image-div-logout"> <img className="image_icon" src={Image5} alt=""/>    
                             <a href="#" className="sidenav-setting fnt-poppins">Log Out</a></div> 
                </li>
            </ul>
            <Style/>
        </nav>

// </div>



    );
}