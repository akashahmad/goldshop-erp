import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import SectioncustomerTarnsaction from '../../Components/customerDetails(viewTransaction)/customerDetails'
import '../../assects/style/common.css'
import AddMoneyModalComponent from '../../Components/modalButton(addmoney)/addmoney'
export default ()=>{
    const [addmoney,setAddMoney]=useState(false)
    return(
        <>
            <div style={{display:"flex"}}>
            <Section1/>
            <SectioncustomerTarnsaction setAddMoney={setAddMoney}/>
            <AddMoneyModalComponent addmoney={addmoney} setAddMoney={setAddMoney}/>
            </div >
        
        </>
    );
}