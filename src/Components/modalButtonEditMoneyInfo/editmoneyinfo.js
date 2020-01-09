import React,{useState, useEffect} from 'react'
import {Modal,Button, CloseButton} from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assets/style/common.css'
import {apiPath} from '../../Config'
import axios from 'axios';

export default(props)=>{
    
    const [billNo, setBillNo] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");
    const [detail, setDetail] = useState("");
    const [currency, setCurrency] = useState("");
    let {editmoney,setEditMoney,selectedId,viewMoney,setViewMoney,setSelectedId}=props;
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
     setStartDate(date);
     }
     const handdelSubmit=(event)=>{
         event.preventDefault();
         let payload={
             billNo:billNo,
             amount:amount,
             status:status,
             detail:detail,
             currency:currency
         }
         axios.put(apiPath+"/api/money/"+selectedId,payload).then((response)=>{
            let duplicateGold=[...viewMoney];
            duplicateGold.forEach((single)=>{
                if(single.id===selectedId){
                    single.billNo=billNo;
                    single.amount=amount;
                    single.status=status;
                    single.detail=detail;
                    single.currency=currency;
                }
            })
             setSelectedId("");
             setBillNo("");
             setAmount("");
             setStatus("");
             setDetail("");
             setCurrency("");
             setEditMoney(false);
         })
     };
     useEffect(()=>{
        let viewMon=viewMoney && viewMoney.find(single=>single.id===selectedId);
        setBillNo(viewMon && viewMon.billNo)
        setAmount(viewMon && viewMon.amount)
        setStatus(viewMon && viewMon.status)
        setDetail(viewMon && viewMon.detail)
        setCurrency(viewMon && viewMon.currency)
     },[selectedId])
    return(
        <>
            {editmoney&&<div className="modal-editmoney">
                <div className="modal-content">
               
                    <div className="model-header mt-5">
                        <div className="d-flex flex-column ml-5">
                        <CloseButton className="modalCross" variant="secondary" onClick={()=>{setEditMoney(false)}} />
                            <h6 className="fnt-poppins font-24 mt-3">Edit Money Information</h6>
                            
                        </div>
                    </div>

                    <div className="modal-body-editmoney">
                        <form onSubmit={(event)=>handdelSubmit(event)}>
                        <div>
                            <label className="model-Money-Label fnt-poppin font-sm">Date</label>
                        </div>
                        <div>
                            <Datepicker className="input-of-modal input-modal-addmoney"
                                        iconSource={require('../../assets/images/dateicon.png')} value={startDate}
                                        onChange={handleChange}></Datepicker>
                        </div>
                        <div>
                            <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
                        </div>
                        <div>
                            <input className="input-of-modal input-modal-addmoney" value={billNo} placeholder="0001"
                                   type="number"
                                   onChange={event => {
                                       setBillNo(event.target.value);
                                   }}
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className="model-Money-Label fnt-poppin font-sm mt-4">Amount </label>
                            <input className="input-of-modal input-modal-addmoney" value={amount} placeholder="$00.00"
                                   type="number"
                                   onChange={event => {
                                       setAmount(event.target.value);
                                   }}
                            />
                        </div>


                        <div className="d-flex flex-column">
                            <label className="model-Money-Label fnt-poppin font-sm mt-4">Status</label>
                            <input className="input-of-modal input-modal-addmoney" value={status}
                                   placeholder="Send or Recieved" type="text"
                                   onChange={event => {
                                       setStatus(event.target.value);
                                   }}
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className="model-Money-Label fnt-poppin font-sm mt-4">Currency</label>
                            <input className="input-of-modal input-modal-addmoney" value={currency}
                                   placeholder="USD , AFG , PKR" type="text"
                                   onChange={event => {
                                       setCurrency(event.target.value);
                                   }}
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className="model-Money-Label fnt-poppin font-sm mt-4">Details</label>
                            <textarea className="input-postbody-modal" value={detail} placeholder="" type="textarea"
                                      onChange={event => {
                                          setDetail(event.target.value);
                                      }}
                            ></textarea>
                        </div>

                          
                            

                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={()=>{setEditMoney(false)}}>Cancel</button>
                                <button className="btn-blue ml-2" type="submit">Update</button>
                            </div>
                        </form>
                    </div>

                </div>
                
            </div>}

      <Style/>
    
        </>
    );
}