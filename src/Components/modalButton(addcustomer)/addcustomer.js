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
              <h6 className="fnt-poppins font-24 mt-3">Add Customer</h6>
              <CloseButton className="modalCross" variant="secondary" onClick={handleClose}/>
          
          </div>
      <form>
          <div className="d-flex flex-column ">
      <label className="model-Money-Label fnt-poppin font-sm">Customer Name</label>
      <input placeholder="Name" className="input-of-modal" type="text"></input>
        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
 
          </div>

          <div className="d-flex flex-column">
      <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone Number</label>
      <input className="input-of-modal" placeholder="Phone Number" type="number"></input>
          </div>


          <div className="d-flex flex-column">
      <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
      <input className="input-of-modal" placeholder="Address" type="text"></input>
          </div>

          <div className="d-flex flex-column">
          <label className="model-Money-Label fnt-poppin font-sm mt-4">Add</label>      
          </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input className="" type="checkbox" name="add"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">Gold</label>
            </div>

            <div className="d-flex">
            <label class="modalcCont">
                <input type="radio" name="add" id="checkbox"></input>
                <span class="checkmark"></span>
            </label> 
            <label className="label-radio-modal ml-5">Money</label>
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