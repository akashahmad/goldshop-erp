import React,{useState} from 'react'
import {Modal,Button, CloseButton} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Style from './style'
import '../../assects/style/common.css'

export default(props)=>{
    let {editCustomer,setEditCustomer} = props;
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    return(
        <>
            {
            editCustomer && <div className="modal-editcustomer">
                <div className="modal-content">
               
                    <div className="model-header mt-4">
                        <div className="d-flex flex-column ml-4">
                        <CloseButton className="modalCross" variant="secondary" onClick={()=>{setEditCustomer(false)}} />
                            <h6 className="fnt-poppins font-24 mt-3">Edit Customer Information</h6>
                            
                        </div>
                    </div>

                    <div className="modal-body-editcustomer">
                        <form>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm">Name</label>
                            </div>
                            <div>
                                <input placeholder="Jhon Doe" className="input-of-modal input-modal-editcustomer" type="text"></input>
                            </div>
                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Address</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editcustomer" placeholder="Abbottabad" type="text"></input>
                            </div>

                            <div>
                                <label className="model-Money-Label fnt-poppin font-sm mt-4">Phone</label>
                            </div>
                            <div>
                                <input className="input-of-modal input-modal-editcustomer" placeholder="0300-1234567" type="number"></input>
                            </div>
                           
                          
                            

                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <button className="btn-white-model" onClick={()=>{setEditCustomer(false)}}>Cancel</button>
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