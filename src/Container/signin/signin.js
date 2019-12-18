import React, { useState } from 'react';
import Stylejs from './style';
import Logo from '../../assects/images/Group30.png';
import {Form} from 'react-bootstrap';
import '../../assects/style/style.css'

export default ()=>{


  
    return(
     
     <div className="Container-fluid login-background-color">
         <div className="login" > 
               
                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                         <h1>Logo</h1>   
                    </div>
                </div>
            

            <div className="login-form">
             <form className="input-form">   
                 <h2 className="Sign-in fnt-poppins">Sign in</h2>
                    <Form.Control className="input-text flirt fnt-poppins" type="text" name="User"  placeholder="User name">
                    </Form.Control>
                    <Form.Control className="input-text signin-input fnt-poppins"  type="password" name="password"  placeholder="Password"/>

                    <div class="custom-control custom-checkbox signin-checkbox">
                        <input id="checked" class="custom-control-input " type="checkbox"  />
                        
                        <label for="checked" class="custom-control-label"></label>
                        <div className="checkbox-data fnt-poppins">Remember me</div>
                         <div className="signin-forgrt-password fnt-poppins"><a href="#">Forgot password?</a></div>

                    </div>
                   <div className="signin-button-div"><button className="btn-blue btn-signin-padding fnt-poppins">Sign In</button></div> 

              </form>
            </div>
         </div>
<Stylejs/>
</div>
       
      
    );
}
