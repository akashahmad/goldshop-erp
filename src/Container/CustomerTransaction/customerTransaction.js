import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerTransaction from '../../Components/customerDetails(viewTransaction)/customerDetails'
import AddMoneyModal from '../../Components/modalButton(addmoney)/addmoney'
import data from '../Homepage/data.json'
import EditMoneyInfoModal from '../../Components/modalButton(editmoneyinfo)/editmoneyinfo'
import DeletePopUpModal from '../../Components/Delete(Popup)/delete'

export default ()=>{
const [addmoney,setAddMoney]=useState(false);
const [editmoney,setEditMoney]=useState(false);
const [deleteModel,setDeleteModel]=useState(false)
return(
<>
<div style={{display:"flex"}}>
<Section1/>
<CustomerTransaction setAddMoney={setAddMoney} data={data} setEditMoney={setEditMoney} setDeleteModel={setDeleteModel}/>
<AddMoneyModal addmoney={addmoney} setAddMoney={setAddMoney}/>
<EditMoneyInfoModal editmoney={editmoney} setEditMoney={setEditMoney}/>
<DeletePopUpModal deleteModel={deleteModel} setDeleteModel={setDeleteModel}/>
</div>
</>
);
}