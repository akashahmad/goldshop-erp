import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import signin from './Container/signin/signin'
import Home from './Container/Homepage/Homepage'
import Section4  from './Components/Section4(customerHeader)/section4'
import CustomerDetails from './Components/customerDetails(viewTransaction)/customerDetails'
import CustomerDetailsInfo from '../src/Components/customerDetails(customerInfo)/customerDetails'
import Table from '../src/Components/Table/table'
import TRanslator from '../src/Components/googleTranslator/translator'
// import Model from './Components/modelButton/modelButton'
import Addgold from './Components/modalButton(addgold)/addgold'
import Addmoney from './Components/modalButton(addmoney)/addmoney'
import Addcustomer from './Components/modalButton(addcustomer)/addcustomer'
import Popup from './Components/popup/popup'
import Editcustomer from './Components/modalButton(editcustomer)/editcustomer'
import Editmoney from './Components/modalButton(editmoneyinfo)/editmoneyinfo'
import Editgold from './Components/modalButton(editgoldinfo)/editgold'
import  Delete from './Components/Delete(Popup)/delete'
import Signupadmin from './Components/SignUp/signup'
import Notification from './Components/Notification/Notification'
import SignUpHeader from './Components/signUpHeader/signUpHeader'
import NotificationPage from '../src/Container/Notification/notification'
import Print from './Components/Print(Popup)/print'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assects/style/common.css'
import './assects/style/style.css'


// pages 
import cutomerPage from './Container/CustomerPage/customer'
import Transaction from './Container/CustomerViewMoney/customerViewmoney'
import customerViewGold from './Container/CustomerViewGold/customerViewGold'
import Signup from './Container/signup/signup'
import customerTransaction from './Container/CustomerTransaction/customerTransaction'
import ViewGold from './Container/CustomersViewGoldPage/customerViewGold'


export default()=>{
  return(
    <>
    <BrowserRouter>
        <Switch>

          <Route path={"/signin"} component={signin}/>
          <Route path={"/section4"} component={Section4} />
          <Route path={"/addgold"} component={Addgold}/>
          <Route path={"/addmoney"} component={Addmoney}/>
          <Route path={"/addcustomer"} component={Addcustomer}/>
          <Route path={"/customerDetails"} component={CustomerDetails}/>
          <Route path={"/info"} component={CustomerDetailsInfo}/>
          <Route path={"/delete"} component={Delete}/>
          <Route path={"/table"} component={Table}/>
          <Route path={"/translate"} component={TRanslator}/>
          <Route path={"/popup"} component={Popup}/>
          <Route path={"/editcustomer"} component={Editcustomer}/>
          <Route path={"/editmoney"} component={Editmoney}/>
          <Route path={"/editgold"} component={Editgold}/>
          <Route path={"/Notification"} component={Notification}/>
          <Route path={"/SignUpHeader"} component={SignUpHeader}/>
          <Route path={"/signupadmin"} component={Signupadmin}/>
          <Route path={"/print"} component={Print}/>
        
        {/* --------------Pages------------------------ */}
        <Route path={"/"} exact component={Home} />
        <Route path={"/customerpage"}  component={cutomerPage}/>
        <Route path={"/customerviewgold"} component={customerViewGold}/>
        <Route path={"/signup"} component={Signup}/>
        <Route path={"/notificationpage"} component={NotificationPage}/>
        <Route path={"/customertransaction"} component={customerTransaction}/>
        <Route path={"/viewgold"} component={ViewGold}/>

        
        
        </Switch>
    </BrowserRouter>
     </>
     );
}