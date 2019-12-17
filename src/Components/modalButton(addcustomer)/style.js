import React from 'react'
export default ()=>{

return(
<style js="true">{`

/*Date Picker React*/
.react-datepicker {
  
    margin-left: 75%;
}
/*Remove Input Number Counter*/
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/*Font Size*/
.font-24{
        font-size:24px;
    }
/*MODAL CROSS*/
    .modal-addcustomer .model-header .modalCross{
        margin-left: 45%;
        font-size: 38px;
        }
/*MODAL LABEL*/
.modal-addcustomer .modal-body-addcustomer .model-Money-Label{
    margin-left: 70px;
    margin-top: 12px;
}
/*MODAL INPUT*/
.modal-body-addcustomer .input-modal-addcustomer{
    margin-left: 70px;
}

/* The Modal (background) */
.modal-addcustomer {
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

.modal-addcustomer .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 37%;
    float: right;
    margin-top: -6%;
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



.modal-body-addcustomer .input-postbody-modal{
    width: 423px;
    height: 102px;
    border-radius: 6px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    margin-left: 70px;
    padding-left: 10px;
}

/*!!!!!!!!!!!!!!!!!!!!!!!RADIO BUTTON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
.modal-radiobtn-addcustomer{
    margin-left: 11%;
}
.modal-radiobtn-addcustomer .radio input {
  position: absolute;
  pointer-events: none;
  visibility: hidden;
}
.modal-radiobtn-addcustomer .radio input:focus + label {
  background: transparent;
}
.modal-radiobtn-addcustomer .radio input:focus + label .checker {
  border-color: #279fdc;
}
.modal-radiobtn-addcustomer .radio input:checked + label .checker {
  box-shadow: inset 0 0 0 4px #279fdc;
}
.modal-radiobtn-addcustomer .radio label {
  display: flex;
  align-items: center;
  height: 28px;
  border-radius: 16px;
  margin: 0px;
  margin-right: -11px;
  margin-top: 3px;
  padding: 0 8px 0 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.modal-radiobtn-addcustomer .radio label:hover {
  background: transparent;
}
.modal-radiobtn-addcustomer .radio label:hover .checker {
  box-shadow: inset 0 0 0 2px #179599;
}
.modal-radiobtn-addcustomer .radio .checker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  
  box-shadow: inset 0 0 0 1px #d1d4db;
  transition: box-shadow 0.3s ease;
}

  .modal-body-addcustomer .label-radio-modal{
    margin-left: 129px!important;
    }
/*!!!!!!!!!!!!!!!!!!!!!!!!!!MODAL LINE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
.modal-body-addcustomer .modal-line{
    width: 455px;
    height: 0px;
    border: 1px solid #e8e8e8;
    margin-left: 10%;
}
.modal-body-addcustomer .modal-line:hover{
    border-color:#279fdc;
}
    /*!!!!!!!!!!!!!!!!!!!!!!!CHECK BOX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    .modal-checkbox-addcustomer{
        margin-left: 12%;
    }
    .modal-checkbox-addcustomer .modal-chk-label{
        margin-top:-4px;
    }
    .modal-checkbox-addcustomer .checkbox-addmodel {
        display: block;
        position: relative;
        padding-left: 35px;
        /* margin-bottom: 12px; */
        cursor: pointer;
        /* font-size: 22px; */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
       }
       
       /* Hide the browser's default checkbox */
       .modal-checkbox-addcustomer .checkbox-addmodel input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
       }
       
       /* Create a custom checkbox */
       .modal-checkbox-addcustomer .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border:1px solid #279fdc;
       }
       
       /* On mouse-over, add a grey background color */
       .modal-checkbox-addcustomer .checkbox-addmodel:hover input ~ .checkmark {
        background-color: #fff;
       }
       
       /* When the checkbox is checked, add a blue background */
       .modal-checkbox-addcustomer .checkbox-addmodel input:checked ~ .checkmark {
        background-color: #fff;
       }
       
       /* Create the checkmark/indicator (hidden when not checked) */
       .modal-checkbox-addcustomer .checkmark:after {
        content: "";
        position: absolute;
        display: none;
       }
       
       /* Show the checkmark when checked */
       .modal-checkbox-addcustomer .checkbox-addmodel input:checked ~ .checkmark:after {
        display: block;
       }
       
       /* Style the checkmark/indicator */
       .modal-checkbox-addcustomer .checkbox-addmodel .checkmark:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid #279fdc;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
       }

`}


</style>

);

}