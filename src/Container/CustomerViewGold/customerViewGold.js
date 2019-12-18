import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import CustomerDetailsInfo from '../../Components/customerDetails(customerInfo)/customerDetails'
import '../../assects/style/common.css'

export default ()=>{
    return(
        <>
            <div style={{display:"flex"}}>
            <Section1/>
            <CustomerDetailsInfo/>
            </div >
        
        </>
    );
}