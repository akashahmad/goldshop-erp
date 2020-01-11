import React, { useState, useEffect } from 'react'
import Style from './Style'
import Image1 from '../../assets/images/magnifying-glass.png'
import Image2 from '../../assets/images/layer-6.png'
import Image3 from '../../assets/images/Layer 6.png'
import Image4 from '../../assets/images/printer.png'
import {Link,withRouter } from 'react-router-dom'
import Table from '../../Components/Customertransactiontable/customerTransactionTable'
import Axios from 'axios'
import { apiPath } from '../../Config'
import Loader from '../../Components/commonComponents/loader/index'



const Table2=(props)=>{
    const {match } =props;
   
    let {data , setAddMoney , setEditMoney, setDeleteModel,setSelectedId,viewMoney,setViewMoney,selectedId}=props;
    

    const[showData,setShowData]=useState([]);
  
 const [getName,setGetName] =useState([]);
 const [getAddress,setGetAddress] =useState([]);
 const [getPhone,setGetPhone] =useState([]);
 const [innerLoader, setInnerLoader] = useState(true);

 let id= match.params && match.params.id;
 useEffect(()=>{
        Axios.get(apiPath+`/api/customerCall/${id}`).then(response=>{
           setGetName(response.data.customerInfo.fullName);
           setGetAddress(response.data.customerInfo.address);
           setGetPhone(response.data.customerInfo.phone);
            setShowData(response.data.customerInfo);
            setInnerLoader(false);
        })
 },[]);

    return(
<>

{ !innerLoader ?<div className="container-fluid Header-section2">
<div className="container-fluid dashboard-content-homepage">

            <nav class="navbar-section2-dashboard navbar-expand-lg ">
                <div class="container-fluid navbar-top">
              

                    <div className="navbar-top-list">
                        <ul class="navbar-topnav-list navbar-nav ml-auto">
                         
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
<div className="customer-details-box">
<div className="container-fluid customer-box1-row">
<ul className="first-column-box1 fnt-poppins">
  <li>Name</li>
  <li>Location</li>
  <li>Contact
  </li>

  </ul>
  <ul>
        <li className="Customer-header-data">{getName}</li>
        <li className="Customer-header-data">{getAddress}</li>
        <li className="Customer-header-data">{getPhone}</li>

        </ul>
    <ul className="container-fluid image-div2">
     <li className="image-div d-flex ">
    <Link>
    <div className="image-customer"><img className="customer-image-icons2" src={Image4} alt=""/></div>
    </Link>
    </li>
    </ul>
    </div>

</div>
                <div className="section-customer-navbottom">
                    <div className="section-customer-bottom-link">
                        <div><Link to={"/customer-money-details/"+id} className="link-of-models view-money-active-button">View Money</Link></div>
                   
                    <div className="link-view-Gold"><Link to={"/customer-gold-details/"+id} className="link-of-models">View Gold</Link></div>
                    </div>
                 <div className="section-customerdetail-right "> 

                       {/* <div className="first-section-customer-detail"><a>View Transactions:</a>
                   </div> */}
                   {/* <div>
                        <select className="dropdown-manu-customer-section">
                             <option value="volvo">PKR</option>
                                <option value="saab">USD</option>
                             <option value="opel">AFGHANI</option>
                            
                            </select>
                   </div>  */}
                   <div className="button-div-customerDetails">
                    <button className="btn-Wh" onClick={()=>{
                        setAddMoney(true)
                    }}>Add Money</button></div>
                    
                    </div>

                    
                </div>
</div>

<Style/>
<Table  data={data} setEditMoney={setEditMoney} setDeleteModel={setDeleteModel}
 setSelectedId={setSelectedId} viewMoney={viewMoney} setViewMoney={setViewMoney}/>
</div> : <Loader/>}
</>



        
    )
}
export default withRouter(Table2);