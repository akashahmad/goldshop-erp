import React, {useEffect, useState} from 'react'
import Style from './Style'
import Image1 from '../../assets/images/magnifying-glass.png'
import Image2 from '../../assets/images/layer-6.png'
import Section3 from '../../Components/CustomerTable/customerTable'



export default (props) => {
    let {setEditCustomer,customers,setCustomers,setSelectedId,setAddCustomer,setDeleteModel,setPrintModel} = props;

    let {data} = props;
    

    return (
        <>
       <div className="container-fluid Header-section4">
            <div className="container-fluid dashboard-content-homepage">

                <nav className="navbar-section2-dashboard navbar-expand-lg ">
                    <div className="container-fluid navbar-top">

                        <div className="navbar-top-list">
                            <ul className="navbar-topnav-list navbar-nav ml-auto">
                                <li className="nav-item image-search">
                                    <a className="nav-link " href="#">
                                        <img src={Image1} alt=""/>
                                    </a>
                                </li>
                                <div className="vertical-line-inside-navbar"></div>
                                <li className="nav-item text-navbar-top">
                                    <a className="nav-link fnt-poppins" href="#">Ahmed Wali</a>
                                </li>
                                <li className="nav-item text-navbar-search">
                                    <a className="nav-link " href="#">
                                        <img className="person-image-navbar" src={Image2} alt=""/>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <div className="div-customer">
                    <div className="customer_heading fnt-poppins">Customers</div>
                    <div className="customer-heading-para fnt-poppins">Control Panel</div>
                    <div className="div-btn-white-wrapper btn-white-customers">
                        <button className="btn-Wh btn-white-customers fnt-poppins" onClick={() => {
                            setAddCustomer(true)
                        }}> Add Customers
                        </button>
                    </div>
                </div>
            </div>
            <Section3 data={data} setEditCustomer={setEditCustomer} setPrintModel={setPrintModel}
                      setDeleteModel={setDeleteModel} customers={customers}
                      setCustomers={setCustomers} setSelectedId={setSelectedId}
                      />
            <Style />
        </div> 
        </>
        )
}