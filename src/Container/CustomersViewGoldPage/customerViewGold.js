import React,{useState} from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerDetailInfo from '../../Components/customerDetails(customerInfo)/customerDetails'
import '../../assects/style/common.css'
import data from '../Homepage/data.json'
import AddGoldModalComponent from '../../Components/modalButton(addgold)/addgold'
import EditCustomerInfoModalComponent from '../../Components/modalButton(editcustomer)/editcustomer'
export default ()=>{
const [addgold,setAddGold]=useState(false)
const [editCustomer,setEditCustomer]=useState(false)
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<CustomerDetailInfo data={data} setAddGold={setAddGold} setEditCustomer={setEditCustomer}/>
<AddGoldModalComponent addgold={addgold} setAddGold={setAddGold}/>
<EditCustomerInfoModalComponent editCustomer={editCustomer} setEditCustomer={setEditCustomer}/>
</div >
</>
    );
}