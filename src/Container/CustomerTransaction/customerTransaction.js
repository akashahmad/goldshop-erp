import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerTransaction from '../../Components/customerDetails(viewTransaction)/customerDetails'
import AddMoneyModal from '../../Components/modalButton(addmoney)/addmoney'
export default ()=>{
const [addmoney,setAddMoney]=useState(false);
return(
<>
<div style={{display:"flex"}}>
<Section1/>
<CustomerTransaction setAddMoney={setAddMoney}/>
<AddMoneyModal addmoney={addmoney} setAddMoney={setAddMoney}/>
</div>
</>
);
}