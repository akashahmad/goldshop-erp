import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import LOGIN from './Container/login/login'
import Home from './Container/Homepage/Homepage'
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
        </Switch>
    </BrowserRouter>
     </>
     );
}