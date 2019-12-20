import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assects/style/common.css'



export default (props) => {
let{addmoney,setAddMoney}=props;

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    // const [modal, setModal] = useState(false);
    // const openModal = () => {
    //     setModal(true);
    // }
    const handleChange = date => {
        setStartDate(date);
        }
      
    return (
        <>

            {addmoney&&<div className="modal-addmoney">
                <div className="modal-content">

                    <div className="model-header">
                        <div className="d-flex flex-row ml-5 justify-content-around">
                            <h6 className="fnt-poppins font-24 mt-3 ml-2">Add Money</h6>
                            <CloseButton className="modalCross" variant="secondary" onClick={()=>{setAddMoney(false)}} />
                        </div>
                    </div>

                    <div className="modal-body-addmoney">
                        <form>
                            <div>
                            <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                            </div>
                            <div>
                            <Datepicker className="input-of-modal input-modal-addmoney" iconSource={require('../../assects/images/dateicon.png')} value={startDate} onChange={handleChange}></Datepicker>
                            {/* <span><img className="calender-icon" src={Calender}/></span> */}
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addmoney" placeholder="0001" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Currency Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addmoney">
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

                            <div className="d-flex modal-radiobtn-addmoney">
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

                            <div className="d-flex modal-radiobtn-addmoney">
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
                                <input className="input-of-modal input-modal-addmoney" placeholder="$00.00" type="number"></input>
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Type</label>
                            </div>

                            <div className="d-flex modal-radiobtn-addmoney">
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
                            <div className="d-flex modal-radiobtn-addmoney">
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

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Details</label>
                                <input className="input-postbody-modal" placeholder="" type="textarea"></input>
                            </div>

                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={()=>{setAddMoney(false)}}>Cancel</button>
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