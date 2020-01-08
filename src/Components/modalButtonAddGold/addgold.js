import React, { useState } from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assets/style/common.css'
import Axios from 'axios';
import { apiPath } from '../../Config'
import { withRouter } from 'react-router-dom';

const Table = (props) => {

    let {match}=props;

    let { addgold, setAddGold } = props;
    // const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleChange = date => {
        setStartDate(date);
    }


    // add gold through axios

    const [customer, setCustomer] = useState("");

    const[goldId,setGoldId]=useState("");
    const [billNo, setBillNo] = useState("");
    const [particular, setParticular] = useState("");
    const [status, setStatus] = useState("");
    const [purity, setPurity] = useState("");
    const [grossWeight, setGrossweight] = useState("");
    const [pureWeight, setPureweight] = useState("");
    const [transactionDate, setTransactiondate] = useState("");
    // const [pureWeightSend,setPureweightSend]=useState("");
    // const[totalPureWeight,setTotalPureWeight]=useState("");
    const[customerId,setCustomerId]=useState("");
    // let token = localStorage.getItem("token");
    // console.log(token);

    // const [addGold , setAddgold]=useState("")
  
    const Addgold = (event) => {
        event.preventDefault();
        let customerId = match.params && match.params.id?match.params.id:"";

        let payload = {
            customerId:customerId , billNo: billNo, particular: particular, status: status, purity: purity, grossWeight: grossWeight,
            pureWeight: pureWeight, transactionDate: transactionDate,
        }

        Axios.post(apiPath + '/api/gold', payload).then(Response => {
            console.log(Response.data);
            
        })

    }

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
                        <form onSubmit={event => Addgold(event)}>
                    
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
                                <input className="input-of-modal input-modal-addgold" value={billNo} placeholder="0001" type="number"
                                    onChange={event => {
                                        setBillNo(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Description</label>
                            </div>
                            <div>
                                <textarea className="input-postbody-modal" value={particular} placeholder="Description"
                                    onChange={event => {
                                        setParticular(event.target.value);
                                    }}
                                ></textarea>
                            </div>

                            {/* <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio1" name="auto" />
                                        <label for="radio1">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Automatic</label></div>

                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="d-flex modal-radiobtn-addgold">
                                <div className="radios">
                                    <div className="d-flex radio">
                                        <input type="radio" id="radio2" name="auto" />
                                        <label for="radio2">
                                            <div className="checker"></div>

                                        </label>
                                        <div><label>Manual</label></div>

                                    </div>
                                </div>
                            </div> */}
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Status</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={status} placeholder="status" type="text"
                                    onChange={event => {
                                        setStatus(event.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Purity</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={purity} placeholder="18.5" type="number"
                                    onChange={event => {
                                        setPurity(event.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Gross Weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={grossWeight} placeholder="1579" type="number"
                                    onChange={event => {
                                        setGrossweight(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Pure Weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={pureWeight} placeholder="" type="text"
                                onChange={event=>{
                                    setPureweight(event.target.value);
                                }}
                                ></input>
                            </div>
                            {/* <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Pure Weight Send</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={pureWeightSend} placeholder="12.8" type="number"
                                    onChange={event => {
                                        setPureweightSend(event.target.value);
                                    }}
                                />
                            </div> */}
                            {/* <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Total Pure Weight </label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-addgold" value={totalPureWeight} placeholder="1012" type="number"
                                    onChange={event => {
                                        setTotalPureWeight(event.target.value);
                                    }}
                                />
                            </div> */}
                            {/* <div className="d-flex flex-column">
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
                            </div> */}




                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={() => { setAddGold(false) }}>Cancel</button>
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
export default withRouter(Table);