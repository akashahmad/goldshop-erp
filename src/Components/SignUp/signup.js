import React from 'react'
import Style from './style'
import manIcon from '../../assects/images/manicon.png'


export default ()=>{
    return(
            <>
                    <div className="main-div-of-signup">
                        <div className="container-of-signup  display-row-left-right">
                            
                            {/* left portion of manIcon and button */}

                            <div className="left-part-os-signup">
                                <div className="images-portion-of-left-side">
                                    <img src={manIcon}/>
                                </div>
                                
                                <div className="btn-left-sdie"> 
                                    <button className="btn-white-model">Upload</button>
                                </div>
                            </div>

                            {/* right portion of form  */}

                            <div className="right-portion-of-form-of-signup">

                                    {/* right side of heading  */}

                                    <div className="rightside-heading-signup">
                                           <h4>User Infromation</h4> 
                                    </div>

                                    {/*  right side of form  */}

                                    <form>

                                        <div className="username-and-phoneNumber">

                                            {/* inputs of name and phone */}

                                            <div className="username-label-input">
                                                <div className="font-sm">
                                                    <label>User Name</label>
                                                </div>
    
                                                <div>
                                                    <input className="input-of-signup font-sm" placeholder="Name"/>
                                                </div>
                                            </div>

                                            <div className="phone-label-input">                                                 
                                                <div className="font-sm">
                                                       <label>Phone Number</label> 
                                                </div>

                                                 <div className="phone-div-signup">
                                                     <input className="input-of-signup font-sm" placeholder="Phone"/>
                                                 </div>   
                                            </div>

                                                                  
                                        </div>
                                        {/* ends here name and phone       */}

                                         {/* email and password starts here    */}


                                 <div className="email-and-password">

                                    {/* inputs of email and password */}

                                        <div className="email-label-input">
                                            <div className="font-sm">
                                                <label>Email</label>
                                            </div>

                                            <div>
                                                <input className="input-of-signup font-sm" placeholder="Email"/>
                                            </div>
                                        </div>

                                        <div className="password-label-input">                                                 
                                            <div className="font-sm">
                                                <label>Password</label> 
                                            </div>

                                            <div className="">
                                                <input className="input-of-signup font-sm" placeholder="Password"/>
                                            </div>   
                                        </div>

                                        </div>
                                        {/* inputs of email and password ends here */}

                                         {/* confrim Password starts here    */}

                                        <div className="confirm-password font-sm">
                                             <div>
                                                <label>Confirm Password</label>
                                             </div>
                                             
                                             <div>
                                                 <input className="input-of-signup font-sm" placeholder="Confirm Password"/>
                                             </div>
                                        </div>

                                        {/* confirm password ends here */}

                                         {/* shop information heading     */}
                                        <div className="shop-information-heading">
                                              <h4>Shop Information</h4>          
                                        </div>

                                            {/* shop information heading ends here */}


                                         {/* shop name and shop address starts here    */}

                                         <div className="shop-and-address">

                                            {/* inputs of shop Name  and Adderess */}

                                                <div className="shop-label-input">
                                                    <div className="font-sm">
                                                        <label>Shop Name</label>
                                                    </div>

                                                    <div>
                                                        <input className="input-of-signup font-sm" placeholder="Shop Name"/>
                                                    </div>
                                                </div>

                                                <div className="Address-label-input">                                                 
                                                    <div className="font-sm">
                                                        <label>Address</label> 
                                                    </div>

                                                    <div className="font-sm">
                                                        <input className="input-of-signup" placeholder="Address"/>
                                                    </div>   
                                                </div>

                                                </div>

                                                <div className="buttons-of-signup">
                                                    <div className="mr-5">
                                                    <button className="btn-white-model font-sm">Cancel</button>
                                                    </div>

                                                    <div className="button-margin-of-signup-second">
                                                    <button className="btn-blue font-sm">Save</button>
                                                    </div>
                                                </div>

                                    </form>
                            </div>

                        </div>
                    </div>



            <Style/>
            </>
    );
}