import React, { useState } from 'react'
import Style from './style'

export default()=>{
    
    const [hide,setHide]=useState(false);

    const openPopup=()=>{
        setHide(true);
    }

    return(
        <>
                <button onClick={()=>openPopup()}>Print</button>
                   {hide &&  <div className="main-div-of-print-model">
                            { /* Model Header  */}
                           
                            <div class="modal-content d-flex model-header">
                                    <div className="heading6-of-printMethod fnt-poppins">
                                       <h6>Print</h6>
                                    </div>

                                    <div className="close-button-of-header fnt-poppins">
                                        <span class="close" onClick={()=>setHide(false)}>&times;</span>
                                     </div>                           


                            <div className="model-body-of-printmethod d-flex justify-content-center">
                                    <div className="option-text-print-model fnt-poppins">
                                        <h5>What do you like to Print?</h5>
                                    </div>
                            </div>

                            <div className="print-model-popup-button">
                                    
                                    <div className="yes-button">
                                        <button className="btn-blue confirm-popup-of-print-method fnt-poppins">Print Money</button>
                                    </div>

                                    <div className=" no-button ml-4 border-of-no-button">
                                        <button className="btn-white-model confirm-popup-of-print-method fnt-poppins">Print Gold</button>
                                    </div>
                                    <div className=" no-button ml-4 border-of-no-button">
                                        <button className="btn-white-model confirm-popup-of-print-method fnt-poppins">Print Main</button>
                                    </div>
                            </div>
                            </div>
                        </div>
                    }

                    <div>
                    <Style/>
                    </div>
        </>
    );
}