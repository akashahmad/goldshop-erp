import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiPath} from '../../Config'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../Components/commonComponents/loader'
import Section1 from '../../Components/Section1/section1'
import Section2 from '../../Components/Section2/section2'
import '../../assets/style/common.css'
import EditCustomer from '../../Components/modalButtonEditCustomer/editcustomer'
import Print from '../../Components/Print(Popup)/print'
import Delete from '../../Components/DeletePopup/delete'
export default (props) => {
    let {loader, shopId} = props;
    const [editCustomer, setEditCustomer] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [customers, setCustomers] = useState([]);
    const [innerLoader, setInnerLoader] = useState(true);
    const [printModel, setPrintModel] = useState(false);
    const [deleteModel, setDeleteModel] = useState(false);
    const [totalCus, setTotalCus] = useState([]);
    const [totalPkr, setTotalPkr] = useState("");
    const [totalPkrRec, setTotalPkrRec] = useState("");
    const [totalUsdRecieved, setTotalUsedRecieved] = useState([]);
    const [totalUsdSend, setTotalUsedSend] = useState([]);
    const [totalAfgSend, setTotalAfgSend] = useState([]);
    const [totalAfgRecieved, setTotalAfgRecieved] = useState([]);
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
        <div>
            {!loader && !innerLoader ? <div style={{display: "flex"}}>
                <Section1 />
                <Section2 setEditCustomer={setEditCustomer} setPrintModel={setPrintModel}
                          setDeleteModel={setDeleteModel}
                          totalCus={totalCus} totalPkr={totalPkr}
                          totalPkrRec={totalPkrRec}
                          totalUsdRecieved={totalUsdRecieved}
                          totalUsdSend={totalUsdSend}
                          totalAfgSend={totalAfgSend}
                          totalAfgRecieved={totalAfgRecieved}
                          setSelectedId={setSelectedId}
                          customers={customers} setCustomers={setCustomers}
                />
                <EditCustomer editCustomer={editCustomer} setEditCustomer={setEditCustomer}/>
                <Delete totalCus={totalCus} setTotalCus={setTotalCus} selectedId={selectedId} deleteModel={deleteModel}
                        setDeleteModel={setDeleteModel} customers={customers} setCustomers={setCustomers}/>
                <Print printModel={printModel} setPrintModel={setPrintModel}/>
            </div > : <Loader/>}
        </div>
    );
}