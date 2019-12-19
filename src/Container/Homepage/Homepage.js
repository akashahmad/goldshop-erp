import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section2 from '../../Components/Section2/section2'
import '../../assects/style/common.css'
import data from './data.json'
export default ()=>{
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<Section2 data={data}/>
</div >
</>
    );
}