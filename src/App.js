import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import LOGIN from './Container/login/login'
import Home from './Container/Homepage/Homepage'
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
          <Route path={"/login"} component={LOGIN}/>
          <Route path={"/model"} component={Model}/>
          <Route path={"/addgold"} component={Addgold}/>
        </Switch>
    </BrowserRouter>
     </>
     );
}