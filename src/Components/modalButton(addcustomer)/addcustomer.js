import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assets/style/common.css'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
import { apiPath } from '../../Config';

const Customers = (props) => {

    let { match } = props;
    let { addCustomer, setAddCustomer } = props;
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date);
    }

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");


    const AddCustomers = (event) => {
        event.preventDefault();
        let id = match.params && match.params.id ? match.params.id : "";
        let payload = {
            id:id,
            fullName: fullName,
            address: address,
            phone: phone,
        }

        Axios.post(apiPath + "/api/customers/", payload).then(Response => {
             console.log(Response.data.data);
                
        })
    }

    return (
        <>
            {addCustomer && <div className="modal-addcustomer">
                <div className="modal-content">

                    <div className="model-header">
                        <div className="d-flex flex-row ml-5 justify-content-around">
                            <h6 className="fnt-poppins font-24 mt-3">Add Customer</h6>
                            <CloseButton className="modalCross" variant="secondary" onClick={() => { setAddCustomer(false) }} />
                        </div>
                    </div>

                    <div className="modal-body-addcustomer">
                        <form onSubmit={(event=>AddCustomers(event))}> 
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Customer Name</label>
                            </div>
                            <div>
                                <input placeholder="Name" className="input-of-modal input-modal-addcustomer" type="text"
                                value={fullName}
                                onChange={event=>{
                                    setFullName(event.target.value);
                                }}
                                />

                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="Phone Number" type="number"
                                value={phone}
                                onChange={event=>{
                                    setPhone(event.target.value);
                                }}
                                />
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="Address" type="text" 
                                value={address}
                                onChange={event=>{
                                    setAddress(event.target.value);
                                }}
                                />
                            </div>


                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={() => { setAddCustomer(false) }}>Cancel</button>
                                <button className="btn-blue ml-2" type="submit">Save</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>}

            <Style />
        </>
    );
}

export default withRouter(Customers);