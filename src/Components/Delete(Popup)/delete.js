import React, { useState, useEffect } from 'react'
import Style from './style'
import axios from 'axios'
import { userAuthapiPath } from '../../Config'
import { withRouter } from 'react-router-dom'


const Table = (props) => {
    
    let { customers, setCustomers } = props;
    let { match } = props;
    let { deleteModel, setDeleteModel } = props;

    let id = match.params && match.params.id ? match.params.id : "";
    console.log(customers)

    const HandleRemoveItem = (id) => {

        console.log("dddddd", id)

        let token = localStorage.getItem("token");
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            axios.delete(userAuthapiPath + "/api/customers/" + id, header).then(res => {
                setCustomers(customers => customers.filter(item => item.id !== id))
                console.log(res)
                console.log(res.data)
                console.log(id)

            })
        }
    }
    return (
        <>

            {/* <button onClick={()=>openPopup()}>Delete</button> */}
            {
                deleteModel && <div className="main-div-of-delete-model">
                    { /* Model Header  */}

                    <div class="modal-content d-flex model-header">
                        <div className="heading6-of-deleteMethod fnt-poppins">
                            <h6>Delete</h6>
                        </div>

                        <div className="close-button-of-header fnt-poppins">
                            <span class="close" onClick={() => setDeleteModel(false)}>&times;</span>
                        </div>


                        <div className="model-body-of-deletemethod">
                            <div className="option-text-delete-model fnt-poppins">
                                <h6>Are you sure you want to delete this record</h6>
                            </div>
                        </div>
                        <div className="delete-model-popup-button">

                            <div className="yes-button">
                                <button className="btn-blue confirm-popup-of-delete-method fnt-poppins"
                                    onClick={() => HandleRemoveItem(id)}
                                >Yes</button>
                            </div>

                            <div className=" no-button ml-5 border-of-no-button">
                                <button className="btn-white-model confirm-popup-of-delete-method fnt-poppins">No</button>
                            </div>
                        </div>

                    </div>
                </div>
            }

            <div>
                <Style />
            </div>
        </>
    );
}
export default withRouter(Table);
