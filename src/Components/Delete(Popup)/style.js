import React from 'react'

export default()=>{
    return(
        <style>
        {`
              .main-div-of-delete-model{
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
                width: 48%;
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
            .heading6-of-deleteMethod {
                justify-content: center;
                padding-left: 46%;
            }
            .heading6-of-deleteMethod h6 {
                font-size: 30px;
                padding-top: 13%;
                color: #333333;
                font-family: poppins;
            }
            .model-header .option-text-delete-model {
                margin-top: 88px;
                padding-left: 28%;
                color: #5b5d65;
                font-family: poppins;
              }
            .option-text-delete-model h6 
            {
                font-size: 20px;
            }
            .delete-model-popup-button {
                display: flex;
                justify-content: center;
                font-family: poppins;
                padding-top: 5%;
                 padding-bottom: 8%;
                 margin-left: 8%;
                }
            .confirm-popup-of-delete-method {
                padding: 10px 84px 7px 75px;
            }
            .confirm-popup-of-delete-method {
              border-color: #1e93ce;
              opacity: 71%;
          }
`}
        </style>
    );
}