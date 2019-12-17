import React, { useState } from 'react'
import Style from './Style'
export default()=>{
  const data={
    
  }
  const [show,setShow]=useState(false);

  const openPopUpBox=()=>{
    if(show===true)
    setShow(false);
    else
    setShow(true);
  }
    return(

<div className="container-fluid section3-table">
<table className="section3-table-inner">
  <tr className="section3-table-head">
  
    <th>Name</th>
    <th>Address</th>
    <th>Contact Number</th>
    <th>Actions</th>
   
  </tr>
  <tr className="section3-table-rows">
 
    <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    
      <td>
      {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }

              <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    
                    </div>
         
    </td>

    


  </tr>
  <tr className="section3-table-rows">
  <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    <td>   
    {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }
           <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div></td>
 

  </tr>
  <tr className="section3-table-rows">
  <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    <td>      
    {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }
        <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div></td>


  </tr>
  <tr className="section3-table-rows">
  <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    <td>
    {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }
       <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div></td>
 

  </tr>
  <tr className="section3-table-rows">
  <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    <td> 
    {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }
             <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div></td>
    

  </tr>
  <tr className="section3-table-rows">
  <td>JOHN DOE</td>
    <td>Abbottabad</td>
    <td>0312-12345667</td>
    <td>    
    {
        show &&
        <div className="main-div-of-section3-table-popup back-image-of-popup">
          <li>View</li>
          <li>Edit</li>
          <li>Print</li>
          <li>Delete</li>
          
          </div>
      }
          <div className="action-div">
            <a href="#" onClick={()=>openPopUpBox()}> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div></td>
  

  </tr>
</table>
<Style/>
</div>


        
    )
}