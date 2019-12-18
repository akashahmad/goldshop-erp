import React from 'react'

export default()=>{
    return(
        <style>
        {`
              .main-div-of-print-model{
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
              .modal-content {
                margin: auto;
                padding: 20px;
                border: 1px solid #888;
                width: 51%;
              }
              
              /* The Close Button */
              .model-header .close {
                color: #aaaaaa;
                float: right;
                font-size: 41px;
                margin-top: -59px;
                font-weight: bold;
              }

              
              .close:hover,
              .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
              }
              
              .close-button-of-header{
                margin-top: -32px;
                font-size: 31px;
                margin-right: 18px;
            }
            .heading6-of-printMethod {
                justify-content: center;
                padding-left: 46%;
            }
            .heading6-of-printMethod h6 {
                font-size: 30px;
                padding-top: 13%;
                color: #333333;
                font-family: poppins;
            }
            .model-header .option-text-print-model {
                margin-top: 58px;
                // padding-left: 28%;
                color: #5b5d65;
                font-family: poppins;
              }
            .option-text-print-model h5 
            {
                font-size: 20px;
            }
            .print-model-popup-button {
                display: flex;
                justify-content: center;
                font-family: poppins;
                padding-top: 5%;
                 padding-bottom: 8%;
                 margin-left: 4%;
                 margin-top: 20px;
                }
            .confirm-popup-of-print-method {
                padding: -1px 84px 7px 75px;
            }
            .confirm-popup-of-print-method {
              border-color: #1e93ce;
              opacity: 71%;
          }
          button.btn-blue.confirm-popup-of-print-method.fnt-poppins {
            padding: 6px 30px 6px 30px;
        }
        button.btn-white-model.confirm-popup-of-print-method.fnt-poppins {
            padding: 6px 30px 6px 30px;
        }
`}
        </style>
    );
}