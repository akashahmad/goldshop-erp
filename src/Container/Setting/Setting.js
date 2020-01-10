import React, {useState} from 'react'
import Style from './style'
import manIcon from '../../assets/images/manicon.png'
import SignUp from '../../Components/signUpHeader/signUpHeader'
import Section1 from '../../Components/Section1/section1'
export default () => {
    var sectionStyle = {
        width: "123px",
        height: "140px",
        backgroundImage: `url(${manIcon})`,
        backgroundRepeat: 'no-repeat'
    };
    const [file, setFile] = useState();
    const imageUpload = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]))
    };
    return (
<>
<div style={{display:'flex'}}>
        <div>
        <Section1/>
        </div>
        <div className="container-fluid d-flex flex-column" style={{padding: 0}}>
            <SignUp/>
            <div className="main-div-of-signup">
                <div className="container-of-signup  display-row-left-right">

                    {/* left portion of manIcon and button */}

                    <div className="left-part-os-signup">
                        <div className="images-portion-of-left-side">
                            <div style={ sectionStyle }>
                                <img src={file} style={{width: '125px', height: '140px'}}/>
                            </div>
                        </div>
                        <div className="btn-left-sdie">
                            <label htmlFor="files" className=" btn-white-model">Upload</label>
                            <input id="files" style={{visibility: 'hidden'}} type="file"
                                   onChange={(e) => imageUpload(e)}/>
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
                                        <input className="input-of-signup font-sm" placeholder="Name" required/>
                                    </div>
                                </div>

                                <div className="phone-label-input">
                                    <div className="font-sm">
                                        <label>Phone Number</label>
                                    </div>

                                    <div className="phone-div-signup">
                                        <input className="input-of-signup font-sm" placeholder="Phone" required/>
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
                                        <input className="input-of-signup font-sm" placeholder="Email" required/>
                                    </div>
                                </div>

                                <div className="password-label-input">
                                    <div className="font-sm">
                                        <label>Password</label>
                                    </div>

                                    <div className="">
                                        <input className="input-of-signup font-sm" placeholder="Password" required/>
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
                                    <input className="input-of-signup font-sm" placeholder="Confirm Password" required/>
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
                                        <input className="input-of-signup font-sm" placeholder="Shop Name" required/>
                                    </div>
                                </div>

                                <div className="Address-label-input">
                                    <div className="font-sm">
                                        <label>Address</label>
                                    </div>

                                    <div className="font-sm">
                                        <input className="input-of-signup" placeholder="Address" required/>
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
        </div>
        </div>
  </>
    );
}