import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Style from './Style'
export default (props) => {
  let {setEditCustomer} = props;
  let {setPrintModel} =props;
  let {setDeleteModel}=props;
  let { data } = props;
  let customers = data ? (data.customers ? data.customers : "") : "";
  // console.log(setEditCustomer);
  const [show, setShow] = useState("");

  return (

    <div className="container-fluid section3-table">
      <table className="section3-table-inner">
        <tr className="section3-table-head fnt-poppins">

          <th>Name</th>
          <th>Address</th>
          <th>Contact Number</th>
          <th>Actions</th>

        </tr>
        {customers?customers.map((single,index)=><tr key={single.id} className="section3-table-rows fnt-poppins">

          <td>{single.name}</td>
          <td>{single.address}</td>
          <td>{single.conntactNumber}</td>

          <td>
            {
              show===single.id &&
              <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                <li>View</li>
                <li><a href='#' onClick={()=>{setEditCustomer(true)}}>Edit</a></li>
                <li><Link onClick={()=>{setPrintModel(true)}}>Print</Link></li>
                <li><Link onClick={()=>{setDeleteModel(true)}}>Delete</Link> </li>
              </div>
            }

            <div className="action-div">
              <button type="button" className="doted-button" onClick={() => setShow(show===single.id?"":single.id)}> <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </button>
            </div>

          </td>
        </tr>):<h1>Loader ....</h1>}
      </table>
      <Style />
    </div>



  )
}