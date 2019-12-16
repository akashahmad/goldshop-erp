import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Style from './style'
import '../../assects/style/common.css'


export default () => {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }

    return (
        <>
            <button id="myBtn" onClick={() => {
                openModal();
            }}>Open Modal</button>


            {modal&&<div className="modal-addcustomer">
                <div className="modal-content">

                    <div className="model-header">
                        <div className="d-flex flex-row ml-5 justify-content-around">
                            <h6 className="fnt-poppins font-24 mt-3">Add Customer</h6>
                            <CloseButton className="modalCross" variant="secondary" onClick={()=>{setModal(false)}} />
                        </div>
                    </div>

                    <div className="modal-body-addcustomer">
                        <form>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Customer Name</label>
                            </div>
                            <div>
                                <input placeholder="Name" className="input-of-modal input-modal-addcustomer" type="text"></input>
                                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="Phone Number" type="number"></input>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="Phone Number" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Add</label>
                            </div>

                            <div className="d-flex modal-checkbox-addcustomer">
                            <label className="checkbox-addmodel">
                                
                            <input  type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                            <div className="modal-chk-label">
                                <label className="fnt-poppin">Gold</label>
                            </div>
                            </div>

                            <div className="d-flex modal-checkbox-addcustomer">
                            <label className="checkbox-addmodel">
                                <span className="fnt-poppin">Money</span>
                            <input  type="checkbox" />
                            <span className="checkmark"></span>
                            </label>
                            </div>
                           
                            <div className="mt-4 modal-line">

                            </div>
                           
                            <div className="ml-5 mt-4">
                            <h6 className="fnt-poppins font-24 ml-4 ">Add Gold</h6>
                             </div>
                             <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" type="date"></input>
                                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="0001" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Description</label>
                                </div>
                            <div>    
                                <textarea className="input-postbody-modal" placeholder="Description" ></textarea>
                            </div>

                            <div className="mt-4">
                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio1" name="auto"/>
                            <label for="radio1">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label>Automatic</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio2" name="auto"/>
                            <label for="radio2">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label>Manual</label></div>
                            
                            </div>
                            </div>
                            </div>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Pure Weight</label>
                            </div>
                            <div>    
                                <input className="input-of-modal input-modal-addcustomer" placeholder="" type="text"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Gold Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio3" name="goldtype"/>
                            <label for="radio3">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label>Sent</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio4" name="goldtype"/>
                            <label for="radio4">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label>Received</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="mt-4 modal-line">
                            </div>

                            <div className="ml-5 mt-4">
                            <h6 className="fnt-poppins font-24 ml-4 ">Add Money</h6>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" type="date"></input>
                                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="0001" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Currency Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio1" name="currencytype"/>
                            <label for="radio1">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label className="fnt-poppins">USD</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio2" name="currencytype"/>
                            <label for="radio2">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label className="fnt-poppins">PKR</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio3" name="currencytype"/>
                            <label for="radio3">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label className="fnt-poppins">Afghani</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Amount</label>
                                <input className="input-of-modal input-modal-addcustomer" placeholder="$00.00" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio4" name="type"/>
                            <label for="radio4">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label className="fnt-poppins">Sent</label></div>
                            
                            </div>
                            </div>
                            </div>
                            <div className="d-flex modal-radiobtn-addcustomer">
                            <div className="radios">
                            <div className="d-flex radio">
                            <input type="radio" id="radio5" name="type"/>
                            <label for="radio5">
                            <div className="checker"></div>
                               
                            </label>
                            <div><label className="fnt-poppins">Received</label></div>
                            
                            </div>
                            </div>
                            </div>

                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={()=>{setModal(false)}}>Cancel</button>
                                <button className="btn-blue ml-2">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
                
            </div>}

            <Style />
        </>
    );
}