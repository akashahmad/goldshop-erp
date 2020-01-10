import React,{useEffect,useState} from 'react'
import Style from '../customerDetailsViewTransaction/Style'
import Image1 from '../../assets/images/magnifying-glass.png'
import Image2 from '../../assets/images/layer-6.png'
import Image3 from '../../assets/images/Layer 6.png'
import Image4 from '../../assets/images/printer.png'
import { Link, withRouter } from 'react-router-dom'
import Table from '../../Components/CustomersViewGold/customersViewGold'
import Axios from 'axios'
import {apiPath} from '../../Config'
import Loader from '../../Components/commonComponents/loader/index'

const Table2 = (props) => {
    let { match} = props;
    let id = match.params && match.params.id;
    let { setDeleteModel } = props;
    let { setEditGold,viewGold,setViewGold,setSelectedId ,selectedId} = props;
    let { setAddGold } = props;
    let { data } = props
    const[showData,setShowData]=useState([]);

 const [getName,setGetName] =useState([]);
 const [getAddress,setGetAddress] =useState([]);
 const [getPhone,setGetPhone] =useState([]);
 const [innerLoader , setInnerLoader]=useState(true);

   useEffect(() => {
            Axios.get(apiPath + `/api/customerCall/${id}`).then(response => {
                setGetName(response.data.customerInfo.fullName);
                setGetAddress(response.data.customerInfo.address);
                setGetPhone(response.data.customerInfo.phone);
                setShowData(response.data.customerInfo);
                setInnerLoader(false);
            })
    }, []);

    return (
        <>
            {!innerLoader ?  <div className="container-fluid Header-section2">
                <div className="container-fluid dashboard-content-homepage">

                    <nav class="navbar-section2-dashboard navbar-expand-lg ">
                        <div class="container-fluid navbar-top">


                            <div className="navbar-top-list">
                                <ul class="navbar-topnav-list
navbar-nav ml-auto">

                                    <li class="nav-item image-search">
                                        <a class="nav-link  " href="#">
                                            <img src={Image1} alt="" />
                                        </a>
                                    </li>
                                    <div
class="vertical-line-inside-navbar"></div>
                                    <li class="nav-item text-navbar-top">
                                        <a class="nav-link
fnt-poppins" href="#">Ahmed Wali</a>
                                    </li>
                                    <li class="nav-item text-navbar-search">
                                        <a class="nav-link " href="#">
                                            <img
className="person-image-navbar" src={Image2} alt="" />

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
                                <li>Contact</li>

                            </ul>
                            <ul>
                                <li>{getName}</li>
                                <li>{getAddress}</li>
                                <li>{getPhone}</li>
                            </ul>
                            <ul className="container-fluid image-div2">
                                <li className="image-div d-flex ">
                                    <div
className="image1-customer"><img className="customer-image-icons1"
src={Image3} alt="" /></div>
                                    <div
className="image-customer"><img className="customer-image-icons2"
src={Image4} alt="" /></div></li>
                            </ul>
                        </div>



                    </div>
                    <div className="section-customer-navbottom">
                        <div className="section-customer-bottom-link">
                            <div><Link
to={"/customer-money-details/"+id} className="link-of-models">View
Money</Link></div>

                            <div className="link-view-Gold"><Link
to={"/customer-gold-details/"+id} className="link-of-models">View
Gold</Link></div>
                        </div>

                        <div className="section-customerdetail-right ">

                            <div className="button-div-customerDetails">
                                <button className="btn-Wh" onClick={() => {
                                    setAddGold(true);
                                }}>Add Gold</button></div>

                        </div>


                    </div>
                </div>
                <Style />
                <Table data={data} setEditGold={setEditGold}
setDeleteModel={setDeleteModel}
                viewGold={viewGold} setViewGold={setViewGold}
setSelectedId={setSelectedId}
                />
            </div> : <Loader/> }
        </>
    )
}
export default withRouter(Table2);