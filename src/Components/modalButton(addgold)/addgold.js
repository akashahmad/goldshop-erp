import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assects/style/common.css'

export default (props) => {
    let {addgold, setAddGold} = props;
    // const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleChange = date => {
        setStartDate(date);
    }

    const [customer , setCustomer]=useState("");
    const [bill , setBill] =useState("");
    const [particular , setParticular]=useState("");
// status
// purity
// grossWeight
// pureWeight
// transactionDate
    const [addGold , setAddgold]=useState("")
    
    return (
        <>
           


            {addgold && <div className="modal-addgold">
                <div className="modal-content">

                    <div className="model-header mt-5">
                        <div className="d-flex flex-column ml-5">
                            <CloseButton className="modalCross" variant="secondary" onClick={() => { setAddGold(false) }} />
                            <h6 className="fnt-poppins font-24 mt-3">Add Gold</h6>

                        </div>
                    </div>

                    <div className="modal-body-addgold">
                        <form>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                            </div>
                            <div>
                                <Datepicker className="input-of-modal input-modal-addgold" value={startDate} onChange={handleChange}></Datepicker>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" placeholder="0001" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Description</label>
                            </div>
                            <div>
                                <textarea className="input-postbody-modal" placeholder="Description" ></textarea>
                            </div>

                            <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio1" name="auto" />
                                        <label for="radio1">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Automatic</label></div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio2" name="auto" />
                                        <label for="radio2">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Manual</label></div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Pure Weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" placeholder="" type="text"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Gold Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio3" name="goldtype" />
                                        <label for="radio3">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Sent</label></div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio4" name="goldtype" />
                                        <label for="radio4">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Received</label></div>

                                    </div>
                                </div>
                            </div>




                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={() => { setAddGold(false) }}>Cancel</button>
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