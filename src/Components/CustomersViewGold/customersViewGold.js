import React, { useState } from 'react'
import Style from './style'
// import CustomerDetailsInfo from '../customerDetails(customerInfo)/customerDetails'

export default (props) => {
    let {setDeleteModel}=props;
    let {setPrintModel}=props;
    let {setEditCustomer} =props;
    let { data } = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");

    return (
        <>
            {/* <div><CustomerDetailsInfo/></div> */}
            <div className="container-fluid section3-table">
                <table className="section3-table-inner">
                    <tr className="section3-table-head fnt-poppins">

                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Actions</th>

                    </tr>
                    {customers ? customers.map((single, index) => <tr key={single.id} className="section3-table-rows fnt-poppins">

                        <td>{single.name}</td>
                        <td>{single.address}</td>
                        <td>{single.conntactNumber}</td>

                        <td>
                            {
                                show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                    <li>View</li>
                                    <li onClick={()=>{setEditCustomer(true)}}>Edit</li>
                                    <li onClick={()=>{setPrintModel(true)}}>Print</li>
                                    <li onClick={()=>{setDeleteModel(true)}}>Delete</li>

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