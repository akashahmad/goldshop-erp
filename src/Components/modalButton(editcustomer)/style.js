import React from 'react'
export default ()=>{

return(
<style js="true">{`

::placeholder{
    font-family: 'Poppins', sans-serif;
    color:#091022;
    font-size:16px;
}
/*Remove Input Number Counter*/
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.font-24{
        font-size:24px;
    }
    .modal-editcustomer .model-header h6{
      margin-left: 7%;
    }
    .modal-editcustomer .model-header .modalCross{
        margin-left: 87%;
        font-size: 38px;
        }

.modal-editcustomer .modal-body-editcustomer .model-Money-Label{
    margin-left: 88px;
    margin-top: 12px;
}
.input-modal-editcustomer{
    margin-left: 88px;
}

/* The Modal (background) */
.modal-editcustomer {
  display:block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */

.modal-editcustomer .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    float: right;
    margin-top: -6%;
    height:100vh;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}



.modal-body-editcustomer .input-postbody-modal{
    width: 423px;
    height: 102px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 88px;
    padding-left: 10px;
}


  .modal-body-editcustomer .label-radio-modal{
    margin-left: 129px!important;
    }



/*NEW RADIO*/


.modal-radiobtn-editcustomer{
  margin-left:13%;
}
.radio input {
  position: absolute;
  pointer-events: none;
  visibility: hidden;
}
.radio input:focus + label {
  background: transparent;
}
.radio input:focus + label .checker {
  border-color: #279fdc;
}
.radio input:checked + label .checker {
  box-shadow: inset 0 0 0 4px #279fdc;
}
.radio label {
  display: flex;
  align-items: center;
  height: 28px;
  border-radius: 16px;
  margin: 0px;
  padding: 0 8px 0 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.radio label:hover {
  background: transparent;
}
.radio label:hover .checker {
  box-shadow: inset 0 0 0 2px #179599;
}
.radio .checker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: inset 0 0 0 1px #d1d4db;
  transition: box-shadow 0.3s ease;
}









`}


</style>

);

}