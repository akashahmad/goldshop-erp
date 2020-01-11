import React, { useState } from 'react'
import Section1 from '../../Components/Section1/section1'
import CustomerTransaction from '../../Components/customerDetailsViewTransaction/customerDetails'
import AddMoneyModal from '../../Components/modalButtonAddMoney/addmoney'
import data from '../Homepage/data.json'
import EditMoneyInfoModal from '../../Components/modalButtonEditMoneyInfo/editmoneyinfo'
import DeletePopUpModal from '../../Components/DeleteMoney/Deletemoney'

export default (props) => {
    const [viewMoney, setViewMoney] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [addmoney, setAddMoney] = useState(false);
    const [editmoney, setEditMoney] = useState(false);
    const [deleteModel, setDeleteModel] = useState(false);
    return (
        <div>
            
            <div style={{ display: "flex" }}>
                <Section1 />
                <CustomerTransaction  setAddMoney={setAddMoney} data={data} setEditMoney={setEditMoney}
                    setDeleteModel={setDeleteModel} setSelectedId={setSelectedId}
                    viewMoney={viewMoney} setViewMoney={setViewMoney} selectedId={selectedId}
                />
                <AddMoneyModal addmoney={addmoney} setAddMoney={setAddMoney} />
                <EditMoneyInfoModal editmoney={editmoney} setEditMoney={setEditMoney} selectedId={selectedId}
                    viewMoney={viewMoney} setViewMoney={setViewMoney} setSelectedId={setSelectedId}
                />
                <DeletePopUpModal viewMoney={viewMoney} setViewMoney={setViewMoney} selectedId={selectedId}
                                  setSelectedId={setSelectedId} deleteModel={deleteModel} 
                                  setDeleteModel={setDeleteModel} />
            </div>
        </div>
    );
}