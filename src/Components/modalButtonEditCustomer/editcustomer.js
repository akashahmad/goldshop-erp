import React, {useState, useEffect} from 'react'
import {CloseButton} from 'react-bootstrap'
import Style from './style'
import axios from 'axios'
import '../../assets/style/common.css'
import {apiPath} from '../../Config'
import {withRouter} from 'react-router-dom'

const Table = (props) => {
    let {editCustomer, setEditCustomer, selectedId, customers, setCustomers, setSelectedId} = props;
    const [fullName, setfullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        let payload = {
            fullName: fullName,
            address: address,
            phone: phone,
        };
        axios.put(apiPath + '/api/customers/' + selectedId, payload).then((res) => {
            let duplicateCustomers = [...customers];
            duplicateCustomers.forEach((sin) => {
                if (sin.id === selectedId) {
                    sin.fullName = fullName;
                    sin.address = address;
                    sin.phone = phone;
                }
            });
            setEditCustomer(false);
            setfullName("");
            setAddress("");
            setPhone("");
            setSelectedId("")
        })
    };
    useEffect(() => {
        let customer = customers && customers.find(sin => sin.id === selectedId);
        setfullName(customer && customer.fullName);
        setAddress(customer && customer.address);
        setPhone(customer && customer.phone)
    }, [selectedId]);
    return (
        <>
        {
            editCustomer && <div className="modal-editcustomer">
                <div className="modal-content">
                    <div className="model-header mt-5">
                        <div className="d-flex flex-column ml-4">
                            <CloseButton className="modalCross" variant="secondary" onClick={() => {
                                setEditCustomer(false)
                            }}/>
                            <h6 className="fnt-poppins font-24 mt-3">Edit Customer Information</h6>

                        </div>
                    </div>
                    <div className="modal-body-editcustomer">
                        <form onSubmit={(event) => {
                            handleSubmit(event)
                        }}>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Name</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editcustomer"
                                       type="text"
                                       value={fullName ? fullName : ""} onChange={(e) => setfullName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editcustomer"
                                       type="text"
                                       value={address ? address : ""} onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editcustomer"
                                       type="number"
                                       value={phone ? phone : null} onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>


                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={() => {
                                    setEditCustomer(false)
                                }}>Cancel
                                </button>
                                <button className="btn-blue ml-2"
                                        type="submit"
                                >Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        <Style />
        </>
    );
};
export default withRouter(Table);