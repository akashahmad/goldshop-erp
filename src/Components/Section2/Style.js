import React from 'react'

export default ()=>{
return(
<style js="true">{`

// .container {
// 	width: 180px;
// 	margin: 0 auto;
// }
// #s {
//     background-color: #29a1df;
//     width: 22px;
//     height: 22px;
//     font-size: 14px;
//     // color: #888;
//     line-height: 24px;
//     border: 0;
//     -webkit-border-radius: 50px;
//     -moz-border-radius: 50px;
//     border-radius: 50px;
//     position: relative;
//     z-index: 5;
//     -webkit-transition: .3s ease;
//     -moz-transition: .3s ease;
//     -ms-transition: .3s ease;
//     -o-transition: .3s ease;
//     transition: .3s ease;
// }

// #s:focus {

//     outline: none;
//     width: 180px;
// }

// #sw {
  
//     float: right;
//     /* z-index: 4; */
//     position: relative;
//     padding: 2px;
//     line-height: 0;
//     -webkit-border-radius: 100px;
//     -moz-border-radius: 100px;
//     border-radius: 100px;
//     background: lightblue;
//     /* display: inline-block; */
//     /* -webkit-transition: .6s ease; */
//     -moz-transition: .6s ease;
//     -ms-transition: .6s ease;
//     -o-transition: .6s ease;
//     transition: .6s ease;
//     opacity: 1;
// }


// #sw:after {
 
//     content: '';
//     display: block;
//     position: absolute;
//     width: 3px;
//     height: 12px;
//     background: lightblue;
//     bottom: -5px;
//     right: -2px;
//     border-radius: 0 0 5px 5px;
//     -webkit-transform: rotate(-45deg);
//     -moz-transform: rotate(-45deg);
//     -ms-transform: rotate(-45deg);
//     -o-transform: rotate(-45deg);
//     transform: rotate(-45deg);
// }
.Header-section2
{
    padding:0;
    background-color: #f8f9fd;

}

.Header-section2 .navbar-section2-dashboard{
    padding:2%;
  
}
.Header-section2 .dashboard-content-homepage .navbar-top-list .navbar-topnav-list{
    display: flex;
    align-items: center;
}
.Header-section2 .navbar-top{
    margin-top: 18px;
    padding-right: 4%;
    display: flex;
    justify-content: flex-end;
}
.Header-section2 .navbar-top-list .text-navbar-top .nav-link{
    color: white;
    opacity:70%;
}
.Header-section2 .vertical-line-inside-navbar{
    border-left: 1.5px solid white;
    height: 28px;
    margin-top: 3px;
    padding-left: 6px;
    opacity:50%;
}
.Header-section2 .image-search{
    // margin-top: 6px;
    padding-right: 15px;
}
.Header-section2 .text-navbar-search{
    padding-left:15px;
}
.Header-section2 .person-image-navbar{
    height:50px;
}
.Header-section2 .dashboard-content-homepage {
    width: 100%;
    background-image: linear-gradient(to top, #1483bc, #29a1df);
    // background-color: #2094cf;
    // min-height: 48vh;
    transition: all 0.3s;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
.Header-section2 .dashboard-content-homepage .dashboard-column-cards-one {
    // color: rgba(255, 255, 255, 0.85);
    margin-left: 43px;
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .Header-section2 .dashboard-content-homepage .dashboard-column-cards-two {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .Header-section2 .dashboard-content-homepage .dashboard-column-cards-three {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .Header-section2 .dashboard-content-homepage  .dashboard-column-cards-four {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  
  /* Remove extra left and right margins, due to padding */
  
  .Header-section2 .dashboard-content-homepage .dashboard-row-homepage {margin: 0 -5px;
  display:flex;
  justify-content:space-around;
  color: #d0e2ee;
  margin-top: 40px;
  }
  
  /* Clear floats after the columns */
  
  .Header-section2 .dashboard-content-homepage .dashboard-row-homepage:after {
    content: "";
    display: table;
    clear: both;
  }
  
  
  /* Style the counter cards */
  
  .Header-section2 .dashboard-content-homepage  .card-data {
      color:rgba(255, 255, 255, 0.85);
    // opacity: 85%;
    padding:0px;
    text-align: center;
    background-color:#2094cf ;
    border:0.8px solid #e8e8e8;
    min-height: 25vh;
    max-height: 40vh;
    border-radius: 6px;
  }
 
  .Header-section2 .dashboard-content-homepage .card-heading{
    padding-top: 2px;
   margin-top: 7px;
}

.Header-section2 .dashboard-content-homepage .card-top {
        display: flex;
        justify-content: space-around;
    }
    .Header-section2 .dashboard-content-homepage .card-heading h3{
        font-size: 20px;
        margin-top: 6px;
    }
    .Header-section2 .dashboard-content-homepage .card-amount-box1{
    font-size:36px;
}
.Header-section2 .dashboard-content-homepage .btn1{
    background-color: #e4f3fa;
   border: 2px solid #e4f3fa;
   color: #1e91cc;
   padding: 8px 35px 8px 35px;
   border-radius: 6px;
   margin-left: 20px;
   font-size: 17px;
}

.Header-section2 .dashboard-content-homepage .div-viewall{
    display: flex;
    justify-content: flex-end;
    margin-right: 4%;
    margin-top:39px;
}
.Header-section2 .dashboard-content-homepage .btn-viewall{
    margin-bottom: 20px;
    background-color:#2094cf ;
    border:1px solid white;
    padding: 6px 40px 6px 40px;
    border-radius:6px;
    color:  #e8e8e8;
    font-size: 17px;
    color:rgba(255, 255, 255, 0.85);
}
.Header-section2 .dashboard-content-homepage .card-recieved {
    min-height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.Header-section2 .dashboard-content-homepage .vertical-line-inside-box {
    border-left: 1.5px solid white;
    height: 86px;
    opacity:50%;
  }
  .Header-section2 .dashboard-content-homepage .card-amount{
      color: rgba(255, 255, 255, 0.85);
      font-size:18px;
  }
  .Header-section2 .dashboard-content-homepage .cardone {
    color: rgba(255, 255, 255, 0.85);
    /* justify-content: space-around; */
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    min-height: 25vh;
    justify-content: center;
}
.Header-section2 .dashboard-content-homepage .navbar-bottom{
    padding-top:10px;
}
.Header-section2 .dashboard-content-homepage .navbar-bottom-data{
    margin-left: 66px;
    margin-right: 66px;
}
.Header-section2 .dashboard-content-homepage .link_button {
    margin-left: 24px;
   margin-top: 56px;
   opacity: 86%;
}
.Header-section2 .dashboard-content-homepage .navbar-button-section2{
    padding:0;
}
// .nav-link::after {
//     content: '';
//     display: block;
//     width: 0;
//     height: 5px;
//     background: white;
//     transition: width .3s;
// }

// .nav-link:hover::after {
//     width: 100%;
//     //transition: width .3s;
// } 

.Header-section2 .dashboard-content-homepage .button-div-white {
    padding-top: 20px;
}
.Header-section2 .dashboard-content-homepage .navbottom-customer {
    background-color: transparent;
    padding-left: 60px;
    color: #ffffff;
    font-size: 24px;
    font-size: 18;
    border: none;
}
.navbar-bottom .button-div-white .navbottom-customer:hover{
    text-decoration:none;
    color:#ffffff;
}

`}</style>



);


}