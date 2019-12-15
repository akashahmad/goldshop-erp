import React, { useState } from 'react';
import Stylejs from './style';
import Logo from '../../assects/images/logo192.png';
import {Form} from 'react-bootstrap';


export default ()=>{


  
    return(
        
     
     <div className="Container-fluid login-background-color">
         
         
         <div className="login" > 

            <div className="login-picture">
            <img className="emg" src={Logo}></img> 
            </div>
            

            <div className="login-form">
             <form className="input-form">   
                 <h2 className="Sign-in">Sign in</h2>
            <Form.Control className="input-text flirt" type="text" name="User"  placeholder="User name"></Form.Control><br/>
           
            <Form.Control className="input-text"  type="password" name="password"  placeholder="Password"
            /><br/><br/>
              <button className="btn-sign">Sign In</button>
              </form>
            </div>
         </div>




<Stylejs/>

</div>
       
      
    );
}
