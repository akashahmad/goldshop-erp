import React, { useState } from 'react'
import Style from './style'
import Datepicker from 'react-datepicker';
import '../../assects/style/common.css'
import "react-datepicker/dist/react-datepicker.css";
import Dateicon from '../../assects/images/dateicon.png'

export default ()=>{
    const [hide,setHide]=useState(false);
    const popup=()=>{
        setHide(true)
    }
    const [startDate, setStartDate] = useState(new Date());

 const handleChange = date => {
  setStartDate(date);
  }
    return(
        <>
         <button onClick={()=>{
             popup();
         }}>Pop Up</button>
            {/* <div className="input">
            <Datepicker
     selected={startDate}
     onChange={handleChange}
        ></Datepicker>
    </div> */}
        {hide&&
        <div className="tripledot-btn ">
        <div className="modal-content ">
            <div className="mdl-lst-btn fnt-poppins">
            <ul>
                <li>View</li>
                <li>Edit</li>
                <li>Print</li>
                <li>Delete</li>
            </ul>
            </div>
        </div>
        </div>
        }
        <Style/>
        </>
    );
}