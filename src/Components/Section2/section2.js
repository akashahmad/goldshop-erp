import React from 'react'
import Style from './Style'
import Section3 from '../Section3/section3'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'

export default()=>{
    return(
<>

<div className="container-fluid Header-section2">
        <div className="container-fluid dashboard-content-homepage">

            <nav class="navbar-section2-dashboard navbar-expand-lg ">
                <div class="container-fluid navbar-top">
                {/* <div className="button-div-white">
                    <button type="button" className=" btn1">
                        Add Customer
                        {/* <span>Toggle Sidebar</span> */}
                    {/* </button></div> */} 
                    {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button> */}

                    <div className="navbar-top-list">
                        <ul class="navbar-topnav-list navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <div id="google_translate_element">
                                        </div></a>
                            </li> */}
                            <li class="nav-item image-search">
                                <a class="nav-link " href="#">
                                    <img src={Image1} alt=""/>
                                </a>
                            </li>
                            <div class="vertical-line-inside-navbar"></div>
                            <li class="nav-item text-navbar-top">
                                <a class="nav-link fnt-poppins" href="#">Ahmed Wali</a>
                            </li>
                            <li class="nav-item text-navbar-search">
                            <a class="nav-link " href="#">
                                    <img className="person-image-navbar" src={Image2} alt=""/>
                                    
                                </a>
                            </li>
                        </ul></div>
                    </div>
               
            </nav>

            <div class="dashboard-row-homepage">  
  <div class="dashboard-column-cards-one">
    <div class="card-data"> 
      <div className="cardone">
          <p className="card-amount-box1 fnt-poppins">196</p>
          <h5>Total Customers</h5>
      </div>
    </div>
  </div>
  <div class="dashboard-column-cards-two">
    <div class="card-data">
      <div className="card-heading fnt-poppins"><h3>USD</h3>
      <hr style={{backgroundColor:"white"}}/>
      </div>
      <div className="card-recieved">
          <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Recieved</h5></div>
      <div class="vertical-line-inside-box"></div>
      <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>

  <div class="dashboard-column-cards-three">
    <div class="card-data">
    <div className="card-heading fnt-poppins"><h3>PKR</h3>
    <hr style={{backgroundColor:"white"}}/>
    </div>
    <div className="card-recieved fnt-poppins"> <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Recieved</h5></div>
    <div class="vertical-line-inside-box fnt-poppins"></div>
    <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>
  
  <div class="dashboard-column-cards-four">
    <div class="card-data">
    <div className="card-heading fnt-poppins"><h3>AFGHANI</h3>
    <hr style={{backgroundColor:"white"}}/>
    </div>
    <div className="card-recieved"> <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Recieved</h5></div>
    <div class="vertical-line-inside-box"></div>
    <div><p className="card-amount fnt-poppins">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-button-section2">
                <div class="container-fluid navbar-bottom">
                <div className=" button-div-white">
                    <a href="#" className="navbottom-customer fnt-poppins">
                        Customers
                        {/* <span>Toggle Sidebar</span> */}
                    </a></div>

                    <div class="collapse navbar-collapse div-viewall" >             
                           <button type="button" className="btn-viewall fnt-poppins">View All</button>                     
                    </div>
                </div>
            </nav>

</div>
<Section3/>
<Style/>
</div>
</>



        
    )
}