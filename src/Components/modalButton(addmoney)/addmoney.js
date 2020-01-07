import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assets/style/common.css'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { userAuthapiPath } from '../../Config'

const Table = (props) => {
    let { match } = props;
    let { addmoney, setAddMoney } = props;

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

    // Axios.post of add money

    const [billNo, setBillNo] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");
    const [detail, setDetail] = useState("");
    const [currency, setCurrency] = useState("");


    const Addmoney = (event) => {
        event.preventDefault();
        let customerId = match.params && match.params.id ? match.params.id : "";
        console.log("passing id", customerId);
        let token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            let payload = {
                customerId: customerId,
                billNo: billNo,
                amount: amount,
                status: status,
                detail: detail,
                currency: currency
                //  transactionDate: transactionDate,
            }

            Axios.post(userAuthapiPath + '/api/money', payload, header).then(Response => {
                console.log(Response.data);

            })

        }

    }


    return (
        <>

            {addmoney && <div className="modal-addmoney">
                <div className="modal-content">

                    <div className="model-header">
                        <div className="d-flex flex-row ml-5 justify-content-around">
                            <h6 className="fnt-poppins font-24 mt-3 ml-2">Add Money</h6>
                            <CloseButton className="modalCross" variant="secondary" onClick={() => { setAddMoney(false) }} />
                        </div>
                    </div>

                    <div className="modal-body-addmoney">
                        <form onSubmit={event=>Addmoney(event)}>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                            </div>
                            <div>
                                <Datepicker className="input-of-modal input-modal-addmoney" iconSource={require('../../assets/images/dateicon.png')} value={startDate} onChange={handleChange}></Datepicker>
                                {/* <span><img className="calender-icon" src={Calender}/></span> */}
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addmoney" value={billNo} placeholder="0001" type="number" 
                                    onChange={event=>{
                                        setBillNo(event.target.value);
                                    }}
                                />
                            </div>
                            {/* 
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
                            </div> */}

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Amount </label>
                                <input className="input-of-modal input-modal-addmoney" value={amount} placeholder="$00.00" type="number" 
                                    onChange={event=>{
                                        setAmount(event.target.value);
                                    }}
                                />
                            </div>


                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Status</label>
                                <input className="input-of-modal input-modal-addmoney" value={status} placeholder="Send or Recieved" type="text" 
                                    onChange={event=>{
                                        setStatus(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Currency</label>
                                <input className="input-of-modal input-modal-addmoney" value={currency} placeholder="USD , AFG , PKR" type="text" 
                                    onChange={event=>{
                                        setCurrency(event.target.value);
                                    }}
                                />
                            </div>


                            {/* <div className="d-flex flex-column">
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
                            </div> */}

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Details</label>
                                <textarea className="input-postbody-modal" value={detail} placeholder="" type="textarea"
                                onChange={event=>{
                                    setDetail(event.target.value);
                                }}
                                ></textarea>
                            </div>


                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={()=> { setAddMoney(false) }}>Cancel</button>
                                <button className="btn-blue ml-2" type="submit" >Save</button>
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