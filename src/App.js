import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import signin from './Container/signin/signin'
import Home from './Container/Homepage/Homepage'
import Section4  from './Components/Section4(customerHeader)/section4'

import Addgold from './Components/modalButton(addgold)/addgold'
import Addmoney from './Components/modalButton(addmoney)/addmoney'
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
          <Route path={"/addgold"} component={Addgold}/>
          <Route path={"/addmoney"} component={Addmoney}/>
          <Route path={"/addcustomer"} component={Addcustomer}/>
        </Switch>
    </BrowserRouter>
     </>
     );
}