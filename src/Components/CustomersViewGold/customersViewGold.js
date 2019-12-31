import React, { useState, useEffect } from 'react'
import Style from './style'
// import CustomerDetailsInfo from '../customerDetails(customerInfo)/customerDetails'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { userAuthapiPath } from '../../Config'
export default (props) => {
    let { setEditGold } = props;
    let { setDeleteModel } = props;
    let { setPrintModel } = props;
    let { setEditCustomer } = props;
    let { data } = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");

    const [viewGold, setViewGold] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token")
        console.log(token)
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get(userAuthapiPath + "/api/gold", header).then(response => {
                console.log(response.data.data)
                setViewGold(response.data.data)
            })
        }
    },[])
    return (
        <>
            {/* <div><CustomerDetailsInfo/></div> */}
            <div className="container-fluid section3-table">
                <table className="section3-table-inner">
                    <tr className="section3-table-head fnt-poppins">

                        <th>Bill No</th>
                        <th>Status</th>
                        <th>Purity</th>
                        <th>Gross Weight</th>
                        <th>Pure Weight</th>
                        <th>Transaction Date</th>
                        <th>Actions</th>

                    </tr>
                    {viewGold ? viewGold.map((single, index) => <tr key={single.id} className="section3-table-rows fnt-poppins">

                        <td>{single.billNo}</td>
                        <td>{single.status}</td>
                        <td>{single.purity}</td>
                        <td>{single.grossWeight}</td>
                        <td>{single.pureWeight}</td>
                        <td>{single.transactionDate}</td>
                        
                        <td>
                            {
                                show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">

                                    {/* <li>View</li>
                                    <li onClick={()=>{setEditCustomer(true)}}>Edit</li>
                                    <li onClick={()=>{setPrintModel(true)}}>Print</li>
                                    <li onClick={()=>{setDeleteModel(true)}}>Delete</li> */}


                                    <li> <Link className="link-model-on-action-buttons" onClick={() => { setEditGold(true) }}> Edit</Link></li>
                                    <li><Link className="link-model-on-action-buttons" onClick={() => { setDeleteModel(true) }}>Delete</Link></li>


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


        </>
    )
}