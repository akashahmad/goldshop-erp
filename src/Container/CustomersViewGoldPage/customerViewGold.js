import React from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerDetailInfo from '../../Components/customerDetails(customerInfo)/customerDetails'
import '../../assects/style/common.css'
import data from '../Homepage/data.json'
export default ()=>{
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<CustomerDetailInfo data={data}/>
</div >
</>
    );
}