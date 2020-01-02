import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section2 from '../../Components/Section2/section2'
import '../../assects/style/common.css'
import EditCustomer from '../../Components/modalButton(editcustomer)/editcustomer'
import Print from '../../Components/Print(Popup)/print'
import Delete from '../../Components/Delete(Popup)/delete'
export default ()=>{
    const [editCustomer,setEditCustomer]=useState(false)
    const [printModel,setPrintModel]=useState(false)
    const [deleteModel,setDeleteModel]=useState(false)
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<Section2 setEditCustomer={setEditCustomer} setPrintModel={setPrintModel} setDeleteModel={setDeleteModel}/>
<EditCustomer editCustomer={editCustomer} setEditCustomer={setEditCustomer} />
<Delete deleteModel={deleteModel} setDeleteModel={setDeleteModel}/>

{/* print model */}

<Print printModel={printModel} setPrintModel={setPrintModel} />
</div >
</>
    );
}