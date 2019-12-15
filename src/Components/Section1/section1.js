import React from 'react'
import Style from './Style'
import Image from '../../assects/images/dashboard.png'
import Image3 from '../../assects/images/customer.png'
import Image4 from '../../assects/images/setting.png'
import Image5 from '../../assects/images/logout1.png'

export default()=>{
    return(
        // <div class="wrapper">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3 className="logo-section1">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
              
                <li>
                       <div className="image-div active"> 
                       
                       <img className="image_icon" src={Image} alt=""/>    
                             <a href="#" >DashBoard</a></div> 
                    
                </li>
              
                <li className="cus">
               
                <div className="image-div"> <img className="image_icon" src={Image3} alt=""/>    
                             <a href="#" className="sidenav-customer">Customers</a></div> 
                </li>
                
                <li>
                <div className="image-div"> <img className="image_icon" src={Image4} alt=""/>    
                             <a href="#" className="sidenav-setting">Setting</a></div> 
                </li> 
            </ul>
            <ul class="list-unstyled components logout">

            <li>
            <div className="image-div"> <img className="image_icon" src={Image5} alt=""/>    
                             <a href="#" className="sidenav-setting">Log Out</a></div> 
                </li>
            </ul>
            <Style/>
        </nav>

// </div>



    );
}