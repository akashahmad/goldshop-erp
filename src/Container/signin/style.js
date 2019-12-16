import React from 'react'
export default()=>(
    <style js="true">{`
     
    .login-background-color {
        background-color: #fcfcfc;
        min-height: 820px;
    }

    .login-background-color .login-form {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        width: 450px;
        height: 605px;
        webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin-left: -5px;
    }
      
    
.login-background-color .login-picture{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 450px;
    height: 605px;
    object-fit: contain;
    webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 1px 6px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    opacity:0.5;
    background-color:#1e91cc;
}
.login-picture .background-image{
    background-image:url('../../assects/images/Group30.png');
}
.input-text.signin-input{
    margin-top: 9%;
}

.login-background-color .login {
    display: flex;
    justify-content: center;
    padding-top: 6%;
}
.input-form .Sign-in {
width: 168px;
height: 60px;
font-size: 49px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.24;
letter-spacing: normal;
text-align: left;
color: #091022;
margin-top: 65px;
margin-left: 74px;
}
.input-text {
    opacity: 78%;
    margin-left: -33px;
    padding-left: 12px;
    height: 50px;
    background-color: #ffffff;
    border: 1px solid;
    font-size: 20px;
    color: #b1b1b1;
    border: none;
    border: 1px solid #e8e8e8;
}
::placeholder {
    color:#091022!important;
    
}
.flirt.form-control {
    margin-top: 72px;
    
}
form.input-form {
    
    margin-left: 75px;
}
.btn-sign
{
    width: 148px;
    height: 62px;
    border-radius: 7px;
    background-color: #1485bf;
    margin-left: 85px;
    margin-top: 8px;
    border: none;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #e1dfdf;
}
.login .login-picture .image-portion h1 {
    text-align: center;
    padding-top: 45%;
    color: #ffffff;
    font-size: 57px;
    opacity: 78%;
    margin-left: 10px;
}       
.signin-checkbox {
    display: flex;
    // justify-content: space-between;
    padding-left: 0px;
    padding-right: 30px;
    padding-top: 7%;
}
.signin-button-div {
    padding-right: 48px;
    padding-top: 17%;
    display: flex;
    justify-content: center;
}
.signin-forgrt-password {
    justify-content: flex-end;
    flex: 2;
    display: flex;
}
    `}

    </style>
);