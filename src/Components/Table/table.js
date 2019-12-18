import React, { useState } from 'react'
import Style from './Style'
import '../../assects/style/common.css'

export default ()=>{
  
    return(
        <>
        <div className="container-fluid section-table-view-details">
        <table className="section-table-view-detailstable-inner">
          <tr className="section-table-view-detailstable-head fnt-poppins">
            <th>Bill No</th>
            <th>Details</th>
            <th>Date</th>
            <th>Purity</th>
            <th>Gross wt</th>
            <th>Pure wt Rec</th>
            <th>Pure wt Sent</th>
            <th>Totel Pure wt</th>
            <th>Actions</th>
           
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
            <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td>
            <div className="action-div">
            <a href="#"> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>

            </td>
        
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
          <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td> <div className="action-div">
            <a href="#"> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>
</td>
         
        
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
          <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td> <div className="action-div">
            <a href="#">  <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>
</td>
        
        
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
          <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td> <div className="action-div">
            <a href="#"> <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>
</td>
         
        
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
          <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td> <div className="action-div">
            <a href="#">  <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>
</td>
            
        
          </tr>
          <tr className="section-table-view-detailstable-rows fnt-poppins">
          <td>0001</td>
            <td>Abbottabad</td>
            <td>Dec 12,2019</td>
            <td>18.5</td>
            <td>1579</td>
            <td>1271.9</td>
            <td>28.73</td>
            <td>1017.56</td>
            <td> <div className="action-div">
                <a href="#"><span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </a> 
                    </div>
</td>
          
        
          </tr>
        </table>
        <Style/>
        </div>
</>





    );
}