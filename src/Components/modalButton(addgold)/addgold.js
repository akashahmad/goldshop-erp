import React,{useState} from 'react'
import {Modal,Button, CloseButton} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Style from './style'
import '../../assects/style/common.css'

export default()=>{
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

        
      <Modal show={show} onHide={handleClose}>
          <div className="d-flex justify-content-end mr-5">
          <CloseButton className="modalCross-addgold" variant="secondary" onClick={handleClose}/>
          </div>
          <div  className="d-flex flex-row mt-4 justify-content-start model-header-addgold">
              <h6 className="fnt-poppins font-24">Add Gold</h6>
              
          
          </div>
      <form>
          <div className="d-flex flex-column ">
      <label className="model-Money-Label-addgold fnt-poppin font-sm">Date</label>
      <input className="input-of-modal-addgold" type="date"></input>
        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
 
          </div>

          <div className="d-flex flex-column">
      <label className="model-Money-Label-addgold fnt-poppin font-sm mt-4">Bill Number</label>
      <input className="input-of-modal-addgold" placeholder="0001" type="number"></input>
          </div>

            <div className="d-flex flex-column">
            <label className="model-Money-Label-addgold fnt-poppin font-sm mt-4">Description</label>
            <textarea className="input-postbody-modal-addgold textarea" placeholder="Description" type="textarea"></textarea>
            </div>
         

            <div className="d-flex mt-4">
            <label class="modalcCont">
                <input className="" type="radio" name="auto"></input>
                <span class="checkmark-addgold"></span>
            </label> 
            <label className="label-radio-modal-addgold ml-5">Automatic</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="auto" id="checkbox"></input>
                <span class="checkmark-addgold"></span>
            </label> 
            <label className="label-radio-modal-addgold ml-5">Manual</label>
            </div>

          

            <div className="d-flex flex-column">
            <label className="model-Money-Label-addgold fnt-poppin font-sm mt-4">Pure Weight</label>
            <input className="input-of-modal-addgold" placeholder="" type="number"></input>
            </div>

            <div className="d-flex flex-column">
            <label className="model-Money-Label-addgold fnt-poppin font-sm mt-4">Gold Type</label>      
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="type" id="checkbox"></input>
                <span class="checkmark-addgold"></span>
            </label> 
            <label className="label-radio-modal-addgold ml-5">Sent</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="type" id="checkbox"></input>
                <span class="checkmark-addgold"></span>
            </label> 
            <label className="label-radio-modal-addgold ml-5">Recieved</label>
            </div>

         

            <div className="d-flex justify-content-center mt-5 mb-5">
                <button className="btn-white-model">Cancel</button>
                <button className="btn-blue ml-2">Save</button>
            </div>
      </form>
      </Modal>
      <Style/>
    
        </>
    );
}