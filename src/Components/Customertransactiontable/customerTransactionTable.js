import React, { useState } from 'react'
import Style from './style'
import { Link } from 'react-router-dom';


export default (props) => {
    let {setDeleteModel}=props;
    let {setEditMoney}=props;
    let { data } = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");

    return (
        <>

            <div className="container-fluid section3-table">
                <table className="section3-table-inner">
                    <tr className="section3-table-head fnt-poppins">

                        <th>Bill No</th>
                        <th>Details</th>
                        <th>Date</th>
                        <th>Amt Sent</th>
                        <th>Amt Recieved</th>
                        <th>Currency Type</th>
                        <th>Action</th>

                    </tr>
                    {customers ? customers.map((single, index) => <tr key={single.id} className="section3-table-rows fnt-poppins">

                        <td>{single.name}</td>
                        <td>{single.address}</td>
                        <td>{single.conntactNumber}</td>
                        <td>{single.name}</td>
                        <td>{single.name}</td>
                        <td>{single.name}</td>
                        <td>
                            {
                                show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                                                        
                                    <li > <Link className="link-model-on-action-buttons" onClick={()=>{setEditMoney(true)}}> Edit</Link></li>
                                    <li> <Link className="link-model-on-action-buttons" onClick={()=>{setDeleteModel(true)}}>Delete</Link></li>
                                    
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