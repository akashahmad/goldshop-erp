import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import CustomerDetailsInfo from '../../Components/customerDetails(customerInfo)/customerDetails'
import Addgold from '../../Components/modalButton(addgold)/addgold'
import '../../assects/style/common.css'

export default ()=>{
    const [addgold, setAddGold] = useState(false)
    return(
        <>
            <div style={{display:"flex"}}>
            <Section1/>
            <CustomerDetailsInfo setAddGold={setAddGold}/>
            <Addgold addgold={addgold} setAddGold={setAddGold}/>
            </div >
        
        </>
    );
}