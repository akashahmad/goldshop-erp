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
import axios from 'axios'
import {apiPath} from '../../Config'
export default () => {
    const [selectedId,setSelectedId]=useState("");
    const [ customers, setCustomers]=useState("");
    const [editCustomer,setEditCustomer]=useState(false)
    const [printModel,setPrintModel]=useState(false)
    const [deleteModel,setDeleteModel]=useState(false)
    const [addCustomer, setAddCustomer] = useState(false)
    const [totalCus, setTotalCus] = useState([]);
    const [totalPkr, setTotalPkr] = useState("");
    const [totalPkrRec, setTotalPkrRec] = useState("");
    const [totalUsdRecieved, setTotalUsedRecieved] = useState([]);
    const [totalUsdSend, setTotalUsedSend] = useState([]);
    const [totalAfgSend, setTotalAfgSend] = useState([]);
    const [totalAfgRecieved, setTotalAfgRecieved] = useState([]);
    const [ineerLoader ,  setInnerLoader]=useState("");

    useEffect(() => {
        axios.get(apiPath + "/api/dashboard").then(res => {
            setTotalCus(res.data.totalCustomers);
            setTotalPkr(res.data.totalPKRSent);
            setTotalPkrRec(res.data.totalPKRReceived)

            // usdRecieved and sent
            setTotalUsedRecieved(res.data.totalUSDReceived);
            setTotalUsedSend(res.data.totalUSDSent);

            // Afgrecieved and sent
            setTotalAfgRecieved(res.data.totalAfghaniReceived);
            setTotalAfgSend(res.data.totalAfghaniSent);
            setInnerLoader(false)
        });
    }, []);
    
    
    
    return (
        <>
            <div style={{ display: "flex" }}>
                <Section1 />
                <Section4 setEditCustomer={setEditCustomer} setPrintModel={setPrintModel}
                          setDeleteModel={setDeleteModel}
                          totalCus={totalCus} totalPkr={totalPkr}
                          totalPkrRec={totalPkrRec}
                          totalUsdRecieved={totalUsdRecieved}
                          totalUsdSend={totalUsdSend}
                          totalAfgSend={totalAfgSend}
                          totalAfgRecieved={totalAfgRecieved}
                          setSelectedId={setSelectedId}
                          customers={customers} setCustomers={setCustomers}
                          setAddCustomer={setAddCustomer} addCustomer={addCustomer}
                />
                <AddCustomer setSelectedId={setSelectedId} addCustomer={addCustomer} setAddCustomer={setAddCustomer}
                 customers={customers} setCustomers={setCustomers}/> 
                <Delete totalCus={totalCus} setTotalCus={setTotalCus} selectedId={selectedId} deleteModel={deleteModel}
                        setDeleteModel={setDeleteModel} customers={customers} setCustomers={setCustomers}
                        setSelectedId={setSelectedId}/>
                <Print printModel={printModel} setPrintModel={setPrintModel} />
                <EditCustomer editCustomer={editCustomer} setEditCustomer={setEditCustomer} />
            </div >
        </>
    );
}
