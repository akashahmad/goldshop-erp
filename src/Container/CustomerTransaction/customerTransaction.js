import React from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerTransaction from '../../Components/customerDetails(viewTransaction)/customerDetails'
export default ()=>{

return(
<>
<div style={{display:"flex"}}>
<Section1/>
<CustomerTransaction/>
</div>
</>
);
}