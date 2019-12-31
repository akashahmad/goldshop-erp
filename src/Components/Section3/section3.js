import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Style from './Style'
import axios from 'axios'
import { userAuthapiPath } from '../../Config'

export default (props) => {

  let { setEditCustomer } = props;
  let { setPrintModel } = props;
  let { setDeleteModel } = props;
  let { data } = props;
  let customers = data ? (data.customers ? data.customers : "") : "";
  // console.log(setEditCustomer);
  const [show, setShow] = useState("");


  // get all customers

  const [getCustomers, setGetcustomers] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token)
    {
      let header = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    
    axios.get(userAuthapiPath+"/api/customers?page=1&limit=10",header).then(Response=>{
      console.log(Response.data.customers);
      setGetcustomers(Response.data.customers);
    })
  }}, [])
  



  return (

    <div className="container-fluid section3-table">
      <table className="section3-table-inner">
        <tr className="section3-table-head fnt-poppins">

          <th>Name</th>
          <th>Address</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>


        {getCustomers ? getCustomers.map((single, index) => <tr key={single.id} className="section3-table-rows fnt-poppins">

          <td>{single.fullName}</td>
          <td>{single.address}</td>
          <td>{single.phone}</td>

          <td>
            {
              show === single.id &&
              <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                <li><Link to="/customertransaction" className="link-model-on-action-buttons">View</Link></li>
                <li><Link className="link-model-on-action-buttons" onClick={() => { setEditCustomer(true) }}>Edit</Link></li>
                <li><Link className="link-model-on-action-buttons" onClick={() => { setPrintModel(true) }}>Print</Link></li>
                <li><Link className="link-model-on-action-buttons" onClick={() => { setDeleteModel(true) }}>Delete</Link> </li>
              </div>
            }

            <div className="action-div">
              <button type="button" className="doted-button" onClick={() => setShow(show === single.id ? "" : single.id)}> <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </button>
            </div>

          </td>
        </tr>) : <h1>Loader ....</h1>}
      </table>
      <Style />
    </div>



  )
}