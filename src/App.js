import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import signin from './Container/signin/signin'
import Home from './Container/Homepage/Homepage'
import Section4  from './Components/Section4(customerHeader)/section4'
import Model from './Components/modelButton/modelButton'
import Addgold from './Components/modalButton(addgold)/addgold'
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
        </Switch>
    </BrowserRouter>
     </>
     );
}