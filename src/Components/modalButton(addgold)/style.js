import React from 'react'
export default ()=>{

return(
<style js="true">{`
.textarea {
    resize: none;
  }
.modalCross-addgold{
font-size:38px;
margin-top:24px;
margin-right: 40px;
}
 /*!!!!!!!!!!!!!!!!!!!!!!!!MODAL FIELDS!!!!!!!!!!!!!!!!!!!!!!!!!*/ 
.label-radio-modal-addgold{
    margin-left: 180px!important;
}
.input-of-modal-addgold{
    width: 423px;
    height: 40px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 140px;
    padding-left: 10px;
}
.input-postbody-modal-addgold{
    width: 423px;
    height: 102px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 140px;
    padding-left: 10px;
}
.font-24{
    font-size:24px;
}
.model-header-addgold{
margin-left: 19%;

}

// .model-addgold{
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 719px;
//   pointer-events: auto;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid rgba(0,0,0,.2);
//   border-radius: .3rem;
//   outline: 0;
//   margin-top: -31px;
//   margin-left: 74%;
// }

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width:719px!important;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
  margin-top: -31px;
  margin-left: 74%;
}



// .model-content {
//     margin-left: 74%;
//     margin-top: -6%;
//     min-height: 110vh;
//     width: 719px;
// }
.model-Money-Label-addgold{
    margin-left: 139px;
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
  .checkmark-addgold {
    position: absolute;
    margin-left: 137px;
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