import React from 'react'
export default()=>(
    <style js="true">{`
     
    body {
        margin: 0px;
        padding: 0px;
    }
    .login-background-color {
        background-color: #f5f5f5;
        min-height: 820px;
    }

    .login-background-color .login-form {
        width: 431px;
        height: 605px;
        border-radius: 24px;
        webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin-left: -5px;
    }
      
    
.login-background-color .login-picture{
    width: 431px;
    height: 605px;
    object-fit: contain;
    webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 10px 10px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    z-index: 1;
}
.login-background-color .login {
    display: flex;
    justify-content: center;
    padding-top: 6%;
}
.Sign-in {
width: 168px;
height: 60px;
font-family: CenturyGothic;
font-size: 49px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.24;
letter-spacing: normal;
text-align: left;
color: #1485bf;
margin-top: 65px;
margin-left: 74px;
}
.input-text {
    width: 288px;
    height: 60px;
    background-color: #f1f1f1;
    font-family: CenturyGothic;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #b1b1b1;
    border: none;
}
::placeholder {
    color: #b1b1b1!important;
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
        
      
    `}

    </style>
);