import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section4 from '../../Components/Section4(customerHeader)/section4'
import AddCustomer from '../../Components/modalButton(addcustomer)/addcustomer'
import '../../assects/style/common.css'
import data from '../Homepage/data.json'

export default () => {
    const [addCustomer, setAddCustomer] = useState(false)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Section1 />
                <Section4 setAddCustomer={setAddCustomer} data={data}/>
                <AddCustomer addCustomer={addCustomer} setAddCustomer={setAddCustomer}/> 
            </div >
        </>
    );
}
