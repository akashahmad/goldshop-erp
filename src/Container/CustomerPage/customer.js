import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section4 from '../../Components/Section4(customerHeader)/section4'
import '../../assects/style/common.css'

export default ()=>{
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<Section4/>
</div >
</>
    );
}