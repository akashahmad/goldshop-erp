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

#sidebar {
    background-color: #f8f9fd;

    min-width: 300px;
    max-width: 300px;
    /* background: #292a2e; */
    color: black;
    transition: all 0.3s;
}
.logo-section1{
    font-weight: 700;
   font-size:36px;
    color: rgba(39, 159, 221, 0.78);
    // opacity: 0.78;
  
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


#sidebar ul li a {
    padding: 25px;
    font-size:18px;
    display: block;
    color: rgba(51, 51, 51, 0.55);
  
}

#sidebar ul li a:hover {
     color: #1e93ce;
    // background: #fff;
    text-decoration:none;
    opacity:100%;
   
}



.sidebar .logout{
    padding-top: 93%;
    // min-height: 50vh;
    // max-height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .image-div-logout {
    margin-left: 1%;
    border-left:5px solid transparent;
    padding-left: 50px;
    display: flex;
    // justify-content: safe;
}
.image-div-logout:hover {
    border-left-color: #1e93ce;
}
  .image-div {
    margin-left: 1%;
    border-left:5px solid transparent;
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
    opacity: 50%;

}
.sidenav-customer{
margin-left:-7px;
}
`}</style>



);


}