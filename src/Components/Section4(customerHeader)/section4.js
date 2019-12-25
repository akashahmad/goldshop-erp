import React,{useEffect} from 'react'
import Style from './Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
import Section3 from '../../Components/Section3/section3'


export default (props) => {
    let {setEditCustomer} =props;
    let {setPrintModel}=props;
   let {setDeleteModel}=props;
    let { setAddCustomer } = props;
    let {data}=props;

    

    return (
        <>

            <div className="container-fluid Header-section4">
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
                    <div className="div-customer">
                        <div className="customer_heading fnt-poppins">Customers</div>
                        <div className="customer-heading-para fnt-poppins">Control Panel</div>
                        <div className="div-btn-white-wrapper btn-white-customers">
                            <button className="btn-Wh btn-white-customers fnt-poppins" onClick={() => { setAddCustomer(true) }}> Add Customers</button>
                        </div>
                    </div>
                </div>
                <Section3 data={data}  setEditCustomer={setEditCustomer} setPrintModel={setPrintModel} setDeleteModel={setDeleteModel}/>
                <Style />
            </div>




        </>




    )
}