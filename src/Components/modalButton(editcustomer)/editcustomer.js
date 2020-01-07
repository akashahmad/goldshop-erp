import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Style from './style'
import axios from 'axios'
import '../../assects/style/common.css'
import { userAuthapiPath } from '../../Config'
import { withRouter } from 'react-router-dom'

const Table = (props) => {
    let { match } = props;
    let { editCustomer, setEditCustomer } = props;
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [fullName, setfullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    let id = match.params && match.params.id ? match.params.id : "";
    console.log(id)
    const handleSubmit = (id) => {   
        // let newList = [...list];
        let token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            let payload={
                fullName:fullName,
                address:address,
                phone:phone
            }

        axios.put(userAuthapiPath + '/api/customers/'+id, payload, header).then(Response => {
            console.log(id)
            console.log(Response.data);
        })
    }
        //  updateList(newList);
        setfullName("")
       
      };


    return (
        <>
            {
                editCustomer && <div className="modal-editcustomer">
                    <div className="modal-content">

                        <div className="model-header mt-5">
                            <div className="d-flex flex-column ml-4">
                                <CloseButton className="modalCross" variant="secondary" onClick={() => { setEditCustomer(false) }} />
                                <h6 className="fnt-poppins font-24 mt-3">Edit Customer Information</h6>

                            </div>
                        </div>

                        <div className="modal-body-editcustomer">
                            <form>
                                <div>
                                    <label className="model-Money-Label fnt-poppin font-sm">Name</label>
                                </div>
                                <div>
                                    <input placeholder="Jhon Doe" className="input-of-modal input-modal-editcustomer" type="text"
                                    value={fullName} onChange={(e) => setfullName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
                                </div>
                                <div>
                                    <input className="input-of-modal input-modal-editcustomer" placeholder="Abbottabad" type="text"
                                    value={address} onChange={(e) => setAddress(e.target.value)}
                                    ></input>
                                </div>

                                <div>
                                    <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone</label>
                                </div>
                                <div>
                                    <input className="input-of-modal input-modal-editcustomer" placeholder="0300-1234567" type="number"
                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                    ></input>
                                </div>




                                <div className="d-flex justify-content-center mt-5 mb-5">
                                    <button className="btn-white-model" onClick={() => { setEditCustomer(false) }}>Cancel</button>
                                    <button className="btn-blue ml-2"
                                    onClick={()=>{handleSubmit(id)}}
                                    >Update</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>}

            <Style />

        </>
    );
}
export default withRouter(Table);