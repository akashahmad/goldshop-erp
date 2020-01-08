import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section4 from '../../Components/Section4CustomerHeader/section4'
import AddCustomer from '../../Components/modalButtonAddCustomer/addcustomer'
import '../../assets/style/common.css'
import data from '../Homepage/data.json'
import Delete from '../../Components/DeletePopup/delete'
import Print from '../../Components/Print(Popup)/print'
import EditCustomer from '../../Components/modalButtonEditCustomer/editcustomer'
export default () => {
    const [editCustomer,setEditCustomer]=useState(false)
    const [printModel,setPrintModel]=useState(false)
    const [deleteModel,setDeleteModel]=useState(false)
    const [addCustomer, setAddCustomer] = useState(false)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Section1 />
                <Section4 setAddCustomer={setAddCustomer} data={data} setEditCustomer={setEditCustomer} setPrintModel={setPrintModel} setDeleteModel={setDeleteModel}/>
                <AddCustomer addCustomer={addCustomer} setAddCustomer={setAddCustomer}/> 
                <Delete deleteModel={deleteModel} setDeleteModel={setDeleteModel}/>
                <Print printModel={printModel} setPrintModel={setPrintModel} />
                <EditCustomer editCustomer={editCustomer} setEditCustomer={setEditCustomer} />
            </div >
        </>
    );
}
