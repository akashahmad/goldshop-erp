import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerDetailInfo from '../../Components/customerDetails(customerInfo)/customerDetails'
import '../../assects/style/common.css'
import data from '../Homepage/data.json'
import AddGoldModalComponent from '../../Components/modalButton(addgold)/addgold'
import EditCustomerInfoModalComponent from '../../Components/modalButton(editcustomer)/editcustomer'
import PrintPopUp from '../../Components/Print(Popup)/print'
export default () => {
    const [addgold, setAddGold] = useState(false)
    const [editCustomer, setEditCustomer] = useState(false)
    const [printModel,setPrintModel]=useState(false)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Section1 />
                <CustomerDetailInfo data={data} setAddGold={setAddGold} setEditCustomer={setEditCustomer} setPrintModel={setPrintModel}/>
                <AddGoldModalComponent addgold={addgold} setAddGold={setAddGold} />
                <EditCustomerInfoModalComponent editCustomer={editCustomer} setEditCustomer={setEditCustomer} />
                <PrintPopUp printModel={printModel} setPrintModel={setPrintModel}/>
            </div >
        </>
    );
}