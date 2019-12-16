import React from 'react'
export default ()=>{

return(
<style js="true">{`
.label-radio-modal{
    margin-left: 129px!important;
}
.input-of-modal{
    width: 423px;
    height: 40px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 88px;
    padding-left: 10px;
}
.input-postbody-modal{
    width: 423px;
    height: 102px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 88px;
    padding-left: 10px;
}
.font-24{
    font-size:24px;
}
.model-header .modalCross{
margin-left: 45%;
font-size: 38px;
}
.modal-content {
    margin-left: 99%;
    margin-top: -6%;
    min-height: 110vh;
    width: 610px;
}
.model-Money-Label{
    margin-left: 88px;
    margin-top: 12px;
}
/*!!!!!!!!!!!!!!!!!!!!!Radio Button!!!!!!!!!!!!!!!!!!!!!*/
.modalcCont {
 
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default radio button */
  .modalcCont input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    margin-left: 86px;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  /* On mouse-over, add a grey background color */
  .modalcCont:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  .modalcCont input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the indicator (dot/circle) when checked */
  .modalcCont input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the indicator (dot/circle) */
  .modalcCont .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }




`}


</style>

);

}