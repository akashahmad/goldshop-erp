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
          <div  className="d-flex flex-row ml-5 mt-4 justify-content-around model-header">
              <h6 className="fnt-poppins font-24">Add Money</h6>
              <CloseButton className="modalCross" variant="secondary" onClick={handleClose}/>
          
          </div>
      <form>
          <div className="d-flex flex-column ">
      <label className="model-Money-Label fnt-poppin font-sm">Date</label>
      <input className="input-of-modal" type="date"></input>
        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
 
          </div>

          <div className="d-flex flex-column">
      <label className="model-Money-Label fnt-poppin font-sm mt-4">Bill Number</label>
      <input className="input-of-modal" placeholder="0001" type="number"></input>
          </div>

          <div className="d-flex flex-column">
          <label className="model-Money-Label fnt-poppin font-sm mt-4">Currency Type</label>      
          </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input className="" type="radio" name="currency"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">USD</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="currency" id="checkbox"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">PKR</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="currency" id="checkbox"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">Afghani</label>
            </div>

            <div className="d-flex flex-column">
            <label className="model-Money-Label fnt-poppin font-sm mt-4">Amount</label>
            <input className="input-of-modal" placeholder="$00.00" type="number"></input>
            </div>

            <div className="d-flex flex-column">
            <label className="model-Money-Label fnt-poppin font-sm mt-4">Type</label>      
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="type" id="checkbox"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">Sent</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="type" id="checkbox"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">Recieved</label>
            </div>

            <div className="d-flex flex-column">
            <label className="model-Money-Label fnt-poppin font-sm mt-4">Details</label>
            <input className="input-postbody-modal" placeholder="" type="textarea"></input>
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