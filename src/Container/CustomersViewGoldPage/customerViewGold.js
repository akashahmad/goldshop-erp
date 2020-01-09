import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerDetailInfo from '../../Components/customerDetailsCustomerInfo/customerDetails'
import '../../assets/style/common.css'
import data from '../Homepage/data.json'
import AddGoldModalComponent from '../../Components/modalButtonAddGold/addgold'
import EditCustomerInfoModalComponent from '../../Components/modalButtonEditCustomer/editcustomer'
import PrintPopUpModalComponent from '../../Components/Print(Popup)/print'
import DeletePopupModalComponent from '../../Components/DeleteGold/delete'
import EditGoldInfoModalComponent from '../../Components/modalButtonEditGoldInfo/editgold'
export default () => {
    const [viewGold, setViewGold] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [editGold, setEditGold] = useState(false)
    const [deleteModel, setDeleteModel] = useState(false)
    const [addgold, setAddGold] = useState(false)
    const [editCustomer, setEditCustomer] = useState(false)
    const [printModel, setPrintModel] = useState(false)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Section1 />
                <CustomerDetailInfo data={data} setAddGold={setAddGold} setPrintModel={setPrintModel}
                    setDeleteModel={setDeleteModel} setEditGold={setEditGold}
                    viewGold={viewGold} setViewGold={setViewGold}
                    setSelectedId={setSelectedId} selectedId={selectedId}
                />
                <AddGoldModalComponent addgold={addgold} setAddGold={setAddGold} />
                <PrintPopUpModalComponent printModel={printModel} setPrintModel={setPrintModel} />
                <DeletePopupModalComponent viewGold={viewGold} setViewGold={setViewGold} setSelectedId={setSelectedId}
                    selectedId={selectedId} deleteModel={deleteModel}
                    setDeleteModel={setDeleteModel} />
                <EditGoldInfoModalComponent editGold={editGold} setEditGold={setEditGold}
                    selectedId={selectedId} viewGold={viewGold}
                    setViewGold={setViewGold} setSelectedId={setSelectedId}
                />
            </div >
        </>
    );
}