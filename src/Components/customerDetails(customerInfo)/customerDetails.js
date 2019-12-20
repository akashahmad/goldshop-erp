import React from 'react'
import Style from '../customerDetails(viewTransaction)/Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
import Image3 from '../../assects/images/Layer 6.png'
import Image4 from '../../assects/images/printer.png'
import Table from '../../Components/CustomersViewGold/customersViewGold'


export default (props) => {
    let { setPrintModel } = props;
    let { setAddGold } = props;
    let { setEditCustomer } = props;
    let { data } = props
    return (
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
                                        <a class="nav-link  " href="#">
                                            <img src={Image1} alt="" />
                                        </a>
                                    </li>
                                    <div class="vertical-line-inside-navbar"></div>
                                    <li class="nav-item text-navbar-top">
                                        <a class="nav-link fnt-poppins" href="#">Ahmed Wali</a>
                                    </li>
                                    <li class="nav-item text-navbar-search">
                                        <a class="nav-link " href="#">
                                            <img className="person-image-navbar" src={Image2} alt="" />

                                        </a>
                                    </li>
                                </ul></div>
                        </div>

                    </nav>
                    <div className="customer-details-box">
                        <div className="container-fluid customer-box1-row">
                            <ul className="first-column-box1 fnt-poppins">
                                <li>Name</li>
                                <li>Location</li>
                                <li>Contact
  </li>
                                <li>Email</li>
                            </ul>
                            <ul>
                                <li>John Doe</li>
                                <li>Abbottabad</li>
                                <li>0312-1234567 </li>
                                <li>johndoe@gmail.com</li>
                            </ul>
                            <ul className="container-fluid image-div2">
                                <li className="image-div d-flex ">
                                    <div className="image1-customer"><img className="customer-image-icons1" src={Image3} alt="" /></div>
                                    <div className="image-customer"><img className="customer-image-icons2" src={Image4} alt="" /></div></li>
                            </ul>
                        </div>

                        {/* <div className=" customer-box1-row1" >
<div className="customer-name">Name</div>
<div className="customer-name-details">John Doe</div>
<div className="box1-customer-details">
<div className="image1-customer"><img className="customer-image-icons1" src={Image3} alt=""/></div>
<div className="image-customer"><img className="customer-image-icons2" src={Image4} alt=""/></div>
</div>
</div> */}
                        {/* <tr >
<td>Location</td>
<td>Abbottabad</td>
</tr>
<tr >
<td>Contact</td>
<td>0300-1234567</td>
</tr>
<tr >
<td>Email</td>
<td>johndoe@gmail.com</td>
</tr> */}



                    </div>
                    <div className="section-customer-navbottom">
                        <div className="section-customer-bottom-link">
                            <div><a>View Money</a></div>

                            <div className="link-view-Gold"><a >View Gold</a></div>
                        </div>
                        <div className="section-customerdetail-right ">
                            {/* <div className="first-section-customer-detail"><a>View Transactions:</a>
                   </div>
                   <div>
                        <select className="dropdown-manu-customer-section">
                             <option value="volvo">PKR</option>
                                <option value="saab">USD</option>
                             <option value="opel">AFGHANI</option>
                            
                            </select>
                   </div>  */}
                            <div className="button-div-customerDetails">
                                <button className="btn-Wh" onClick={() => {
                                    setAddGold(true);
                                }}>Add Gold</button></div>

                        </div>


                    </div>
                </div>
                <Style />
                <Table data={data} setEditCustomer={setEditCustomer} setPrintModel={setPrintModel} />
            </div>
        </>
    )
}