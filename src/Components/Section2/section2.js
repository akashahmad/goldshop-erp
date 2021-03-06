import React, {useState} from 'react'
import Style from './Style'
import Section3 from '../Section3/section3'
import Image1 from '../../assets/images/magnifying-glass.png'
import Image2 from '../../assets/images/layer-6.png'

export default (props) => {
    let {
        totalCus, totalPkr,
        totalPkrRec, totalUsdRecieved, totalUsdSend, setEditCustomer, setPrintModel, setDeleteModel,
        totalAfgRecieved, totalAfgSend, setSelectedId, customers, setCustomers
    } = props;

    return (
        <>
        <div className="container-fluid Header-section2 ">
            <div className="container-fluid dashboard-content-homepage no-print">

                <nav className="navbar-section2-dashboard navbar-expand-lg ">
                    <div className="container-fluid navbar-top">
                        <div className="navbar-top-list">
                            <ul className="navbar-topnav-list navbar-nav ml-auto">
                                <li className="nav-item image-search">
                                    <a className="nav-link " href="#">
                                        <form className="search-form">
                                            <div className="input-group search-group">
                                                <input type="text" className="form-control search-control"
                                                       placeholder="Enter your search term..."/>
                                            </div>
                                        </form>
                                    </a>
                                </li>
                                <div className="vertical-line-inside-navbar"/>
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

                <div className="dashboard-row-homepage">
                    <div className="dashboard-column-cards-one">
                        <div className="card-data">
                            <div className="cardone">
                                <p className="card-amount-box1 fnt-poppins">
                                    {
                                        totalCus
                                    }
                                </p>
                                <h5>Total Customers</h5>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-column-cards-two">
                        <div className="card-data">
                            <div className="card-heading fnt-poppins"><h3>USD</h3>
                                <hr style={{backgroundColor: "white"}}/>
                            </div>
                            <div className="card-recieved">
                                <div><p className="card-amount fnt-poppins">{totalUsdRecieved}</p>
                                    <h5> Recieved</h5></div>
                                <div className="vertical-line-inside-box"/>
                                <div><p className="card-amount fnt-poppins">{totalUsdSend}</p>
                                    <h5> Sent</h5></div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-column-cards-three">
                        <div className="card-data">
                            <div className="card-heading fnt-poppins"><h3>PKR</h3>
                                <hr style={{backgroundColor: "white"}}/>
                            </div>
                            <div className="card-recieved fnt-poppins">
                                <div><p className="card-amount fnt-poppins">{totalPkrRec}</p>
                                    <h5> Recieved</h5></div>
                                <div className="vertical-line-inside-box fnt-poppins"/>
                                <div><p className="card-amount fnt-poppins">{totalPkr}</p>
                                    <h5> Sent</h5></div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-column-cards-four">
                        <div className="card-data">
                            <div className="card-heading fnt-poppins"><h3>AFGHANI</h3>
                                <hr style={{backgroundColor: "white"}}/>
                            </div>
                            <div className="card-recieved">
                                <div><p className="card-amount fnt-poppins">{totalAfgRecieved}</p>
                                    <h5> Recieved</h5></div>
                                <div className="vertical-line-inside-box"/>
                                <div><p className="card-amount fnt-poppins">{totalAfgSend}</p>
                                    <h5> Sent</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-button-section2">
                    <div className="container-fluid navbar-bottom">
                        <div className=" button-div-white">
                            <a href="#" className="navbottom-customer fnt-poppins">
                                Customers
                            </a></div>

                        <div className="collapse navbar-collapse div-viewall">
                            <button type="button" className="btn-viewall fnt-poppins">View All</button>
                        </div>
                    </div>
                </nav>

            </div>
            <Section3 setSelectedId={setSelectedId} setEditCustomer={setEditCustomer} setPrintModel={setPrintModel}
                      setDeleteModel={setDeleteModel} customers={customers} setCustomers={setCustomers}/>
            <Style />
        </div>
        </>)
}