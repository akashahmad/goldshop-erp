import React, { useState } from 'react'
import StyleShop from './style'
import manIcon from '../../assects/images/manicon.png'
// import SignUp from '../../Components/signUpHeader/signUpHeader'

import { userAuthapiPath } from '../../Config'
import  axios from 'axios'

// create Shop header 
import Style from '../../Components/Notification/Style'
import Image1 from '../../assects/images/magnifying-glass.png'
import Image2 from '../../assects/images/layer-6.png'
// ------------------


export default () => {


    const [ firstName , setFirstname ] =useState("");
    const [ lastName , setLastname ] =useState("");
    const [ email , setEmail] =useState("");
    const [ password ,setPassword ] = useState("");
    const [ shopName , setShopName ] = useState(""); 
    const [ address ,setAddress ] =useState("");
    const [ phone , setPhone ] =useState("");
    const [logo , setLogo ] =useState("");

    const CreateShop = (event)=>{
        event.preventDefault();
        let payload  = {firstName:firstName , lastName:lastName , email:email , password:password , shopName:shopName , address:address , phone:phone};
        axios.post(userAuthapiPath+"/api/createShop/ToGath3rW3Grow&*^",payload).then(response=>{
            console.log(response.log);
        })
    }


    return (
        <>
            {/* // ----------------------Header Starts Here------------------------------- */}


            <div className="container-fluid Notification-customers">
                <div className="container-fluid notification-inner-content">

                    <nav class="navbar-section2-dashboard navbar-expand-lg ">
                        <div class="container-fluid notification-navbar-top">

                        </div>

                    </nav>
                    <div className="div-customer">
                        <div className="customer_heading-create-shop fnt-poppins">Create New Shop</div>

                    </div>

                </div>

                <Style />

            </div>



            {/* // -----------------------ENDS HERE---------------------------------- */}



            <div className="container-fluid d-flex flex-column" style={{ padding: 0 }}>
                <div className="main-div-of-signup">
                    <div className="container-of-signup  display-row-left-right">

                        {/* left portion of manIcon and button */}

                        <div className="left-part-os-signup">
                            <div className="images-portion-of-left-side">
                                <img src={manIcon} />
                            </div>

                            <div className="btn-left-sdie">
                                <button className="btn-white-model">Upload</button>
                            </div>
                        </div>

                        {/* right portion of form  */}

                        <div className="right-portion-of-form-of-signup">

                            {/* right side of heading  */}

                            <div className="rightside-heading-signup">
                                <h4>Admin Infromation</h4>
                            </div>

                            {/*  right side of form  */}

                            <form onSubmit={event=>CreateShop(event)}>

                                <div className="username-and-phoneNumber">

                                    {/* inputs of name and phone */}

                                    <div className="username-label-input">
                                        <div className="font-sm">
                                            <label>First Name</label>
                                        </div>

                                        <div>
                                            <input value={firstName} className="input-of-signup font-sm" placeholder="First Name" onChange={event=>{
                                                setFirstname(event.target.value);
                                            }} />
                                        </div>
                                    </div>

                                    <div className="phone-label-input">
                                        <div className="font-sm">
                                            <label>Last Name</label>
                                        </div>

                                        <div className="phone-div-signup">
                                            <input value={lastName} className="input-of-signup font-sm" placeholder="Last Name" onChange={event=>{
                                                setLastname(event.target.value);
                                            }} />
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
                                            <input value={email} className="input-of-signup font-sm" placeholder="Email" onChange={event=>{
                                                setEmail(event.target.value);
                                            }}/>
                                        </div>
                                    </div>

                                    <div className="password-label-input">
                                        <div className="font-sm">
                                            <label>Password</label>
                                        </div>

                                        <div className="">
                                            <input value={password} className="input-of-signup font-sm" placeholder="Password" onChange={event=>{
                                                setPassword(event.target.value);
                                            }}/>
                                        </div>
                                    </div>

                                </div>
                                {/* inputs of email and password ends here */}


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
                                            <input value={shopName} className="input-of-signup font-sm" placeholder="Shop Name" onChange={event=>{
                                                setShopName(event.target.value);
                                            }}/>
                                        </div>
                                    </div>

                                    <div className="Address-label-input">
                                        <div className="font-sm">
                                            <label>Address</label>
                                        </div>

                                        <div className="font-sm">
                                            <input value={address} className="input-of-signup" placeholder="Address" onChange={event=>{
                                                setAddress(event.target.value);
                                            }}/>
                                        </div>
                                    </div>

                                </div>

                                    {/* phone and logo starts here */}
                                <div className="shop-and-address">

                                    {/* inputs of shop Name  and Adderess */}

                                    <div className="shop-label-input">
                                        <div className="font-sm">
                                            <label>Phone</label>
                                        </div>

                                        <div>
                                            <input value={phone} className="input-of-signup font-sm" placeholder="Phone" onChange={event=>{
                                                setPhone(event.target.value);
                                            }}/>
                                        </div>
                                    </div>

                                    {/* <div className="Address-label-input">
                                        <div className="font-sm">
                                            <label>Address</label>
                                        </div>

                                        <div className="font-sm">
                                            <input className="input-of-signup" placeholder="Address" />
                                        </div>
                                    </div> */}

                                </div>

                                <div className="buttons-of-signup">
                                    <div className="mr-5">
                                        <button className="btn-white-model font-sm">Cancel</button>
                                    </div>

                                    <div className="button-margin-of-signup-second">
                                        <button type="submit" className="btn-blue font-sm">Save</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>



                <StyleShop />
            </div>
        </>
    );
}