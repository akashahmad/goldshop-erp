import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import signin from './Container/signin/signin'
import Home from './Container/Homepage/Homepage'
import Section4  from './Components/Section4(customerHeader)/section4'
import CustomerDetails from './Components/customerDetails(viewTransaction)/customerDetails'
import CustomerDetailsInfo from '../src/Components/customerDetails(customerInfo)/customerDetails'
import Model from './Components/modelButton/modelButton'
import Addgold from './Components/modalButton(addgold)/addgold'
import Addcustomer from './Components/modalButton(addcustomer)/addcustomer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assects/style/common.css'
import './assects/style/style.css'


export default()=>{
  return(
    <>
    <BrowserRouter>
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/signin"} component={signin}/>
          <Route path={"/section4"} component={Section4} />
          <Route path={"/model"} component={Model}/>
          <Route path={"/addgold"} component={Addgold}/>
          <Route path={"/addcustomer"} component={Addcustomer}/>
          <Route path={"/customerDetails"} component={CustomerDetails}/>
          <Route path={"/info"} component={CustomerDetailsInfo}/>
        </Switch>
    </BrowserRouter>
     </>
     );
}