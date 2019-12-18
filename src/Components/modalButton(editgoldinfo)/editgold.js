import React,{useState} from 'react'
import {Modal,Button, CloseButton} from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assects/style/common.css'

export default()=>{
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
  
    const [modal, setModal] = useState(false);
    const openModal=()=>{
        setModal(true);
    }
    const handleChange = date => {
     setStartDate(date);
     }
    return(
        <>
         <button id="myBtn" onClick={() => {
                openModal();
            }}>Open Modal</button>


            {modal&&<div className="modal-editgold">
                <div className="modal-content">
               
                    <div className="model-header mt-4">
                        <div className="d-flex flex-column ml-5">
                        <CloseButton className="modalCross" variant="secondary" onClick={()=>{setModal(false)}} />
                            <h6 className="fnt-poppins font-24 mt-3">Edit Gold Information</h6>
                            
                        </div>
                    </div>

                    <div className="modal-body-editgold">
                        <form>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Bill No</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="0001" type="number"></input>
                            </div>
                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Details</label>
                                </div>
                            <div>    
                                <input className="input-of-modal input-modal-editgold" type="text" placeholder="Lorem Ipsum dolar" ></input>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Date</label>
                            </div>
                            <div>
                               
                                <Datepicker className="input-of-modal input-modal-editgold" value={startDate} onChange={handleChange}></Datepicker>
                            </div>
                            
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Purity</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="18.5" type="number"></input>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Gross weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="1579" type="number"></input>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Pure Weight Receive</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="1217.79" type="number"></input>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Pure Weight Sent</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="28.73" type="number"></input>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Total Pure Weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" placeholder="1017.9" type="number"></input>
                            </div>
                            

                            <div className="d-flex justify-content-center mt-4 mb-5">
                                <button className="btn-white-model" onClick={()=>{setModal(false)}}>Cancel</button>
                                <button className="btn-blue ml-2">Update</button>
                            </div>
                        </form>
                    </div>

                </div>
                
            </div>}

      <Style/>
    
        </>
    );
}