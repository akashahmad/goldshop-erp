import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerTransaction from '../../Components/customerDetailsViewTransaction/customerDetails'
import AddMoneyModal from '../../Components/modalButtonAddMoney/addmoney'
import data from '../Homepage/data.json'
import EditMoneyInfoModal from '../../Components/modalButtonEditMoneyInfo/editmoneyinfo'
import DeletePopUpModal from '../../Components/DeletePopup/delete'

export default (props)=>{
const [addmoney,setAddMoney]=useState(false);
const [editmoney,setEditMoney]=useState(false);
const [deleteModel,setDeleteModel]=useState(false);


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