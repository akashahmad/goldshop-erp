import React from 'react'

export default ()=>{
return(
<style js="true">{`
.wrapper {
    display: flex;
}
.wrapper {
    display: flex;
    display: flex;
    width: 100%;
    align-items: stretch;
}
.line2 {
    width: 77%;
    height: 0px;
    background-color: white;
}
#sidebar {
    background-color: #f8f9fd;

    min-width: 300px;
    max-width: 300px;
    /* background: #292a2e; */
    color: black;
    transition: all 0.3s;
}
.logo-section1{
   font-size:36px;
    color: rgba(39, 159, 221, 0.78);
  
}
.download1 {
    border: 2px solid #ffc02b;
    background-color: #ffc02b;
    padding-left: 17px;
    padding-right: 17px;
    /* padding: 7px; */
    padding-top: 7px;
    padding-bottom: 7px;
    font-weight: 700;
    border-radius: 10px;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    margin-top:49px;
    text-align:center;
   
    
}

#sidebar ul.components {
    margin-top: 84px;
    text-align:center;
   
    /* border-bottom: 1px solid #292a2e; */
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    
    opacity:55%;
    padding: 25px;
    font-size:18px;
    display: block;
    color: rgba(51, 51, 51, 0.55);
  
}

#sidebar ul li a:hover {
     color: #1e93ce;
    // background: #fff;
    text-decoration:none;
   
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    /* background: #292a2e; */
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

ul.list-unstyled.components.logout{
    min-height: 35vh;
    max-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .image-div {
    margin-left: 1%;
    border-left:3px solid transparent;
    padding-left: 50px;
    display: flex;
    // justify-content: safe;
}
.image-div:hover {
    border-left-color: #1e93ce;
}
.image_icon{
    height: 30px;
    margin-top: 21px;
    opacity:0.32;
}
.sidenav-customer{
margin-left:-7px;
}
`}</style>



);


}