import React,{useState,useEffect} from 'react'
import {Modal,Button, CloseButton} from 'react-bootstrap'
import Datepicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css";
import Style from './style'
import '../../assets/style/common.css'
import Axios from 'axios';
import { apiPath } from '../../Config';
export default(props)=>{
    let {editGold,setEditGold,viewGold,setViewGold,selectedId,setSelectedId}=props;
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [modal, setModal] = useState(false);
    const [billNo, setBillNo] = useState("");
    const [purity, setPurity] = useState("");
    const [status, setStatus] = useState("");
    const [grossWeight, setGrossWeight] = useState("");
    const [pureWeight, setPureWeight] = useState("");
    const openModal=()=>{
        setModal(true);
    }
    const handleChange = date => {
     setStartDate(date);
     }

     const handleSubmit =(event)=>{
         event.preventDefault();
         let payLoad={
             billNo:billNo,
             purity:purity,
             status:status,
             grossWeight:grossWeight,
             pureWeight:pureWeight
         }
         Axios.put(apiPath+"/api/gold/"+selectedId,payLoad).then(response=>{
            let duplicateGold=[...viewGold];
            duplicateGold.forEach((single)=>{
                if(single.id===selectedId){
                    single.billNo=billNo;
                    single.purity=purity;
                    single.status=status;
                    single.grossWeight=grossWeight;
                    single.pureWeight=pureWeight;
                }
            })
            setEditGold(false);
            setSelectedId("");
            setBillNo("");
            setStatus("");
            setPurity("");
            setPureWeight("");
            setGrossWeight("");
         })
     }
     useEffect(()=>{
        let view=viewGold && viewGold.find(single=>single.id===selectedId);
        setBillNo(view && view.billNo);
        setStatus(view && view.status);
        setPurity(view && view.purity);
        setPureWeight(view && view.pureWeight);
        setGrossWeight(view && view.grossWeight);
     },[selectedId])
    return(
        <>
            {editGold&&<div className="modal-editgold">
                <div className="modal-content">
               
                    <div className="model-header mt-5">
                        <div className="d-flex flex-column ml-5">
                        <CloseButton className="modalCross" variant="secondary" onClick={()=>{setEditGold(false)}} />
                            <h6 className="fnt-poppins font-24 mt-3">Edit Gold Information</h6>
                            
                        </div>
                    </div>

                    <div className="modal-body-editgold">
                        <form onSubmit={(event)=>handleSubmit(event)}>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Bill No</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" value={billNo} type="number"
                                      onChange={event => {
                                        setBillNo(event.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="d-flex flex-column">
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Status</label>
                                </div>
                            <div>    
                                <input className="input-of-modal input-modal-editgold" type="text" value={status}
                                      onChange={event => {
                                        setStatus(event.target.value);
                                    }}
                                ></input>
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
                                <input className="input-of-modal input-modal-editgold" value={purity} type="number"
                                      onChange={event => {
                                        setPurity(event.target.value);
                                    }}
                                ></input>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Gross weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" value={grossWeight} type="number"
                                      onChange={event => {
                                        setGrossWeight(event.target.value);
                                    }}
                                ></input>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Pure Weight</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editgold" value={pureWeight} type="number"
                                      onChange={event => {
                                        setPureWeight(event.target.value);
                                    }}
                                ></input>
                            </div>
                        

                            <div className="d-flex justify-content-center mt-4 mb-5">
                                <button className="btn-white-model" onClick={()=>{setEditGold(false)}}>Cancel</button>
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