import React, { useState,useEffect } from 'react'
import Style from './style'
import axios from 'axios'
import {userAuthapiPath} from '../../Config'
import { withRouter } from 'react-router-dom'


const Table =(props)=>{
    let { match } =props;
    let {deleteModel,setDeleteModel}=props;
   
    // console.log("dhdhhdd",handleRemoveItem)

    // const [hide,setHide]=useState(false);

    // const openPopup=()=>{
    //     setHide(true);
    // }
    const [customers, setCustomers] = useState([]);

   useEffect(() => {
        nextCourses(1);
    }, []);

    const handlePageClick = (page) => {
        nextCourses(page.selected + 1);
    };

    const nextCourses = (page) => {
        let token = localStorage.getItem("token");
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            axios.get(userAuthapiPath + `/api/customers?page=${page}&limit=5`, header).then(response => {
                setCustomers(response.data.customers);
                // setPageCount(response.data.totalPages);
                // setCurrentPage(response.data.currentPage);
            })
        }
    };



    // const deleteCustomer =()=>{

    //     let token = localStorage.getItem("token");
    //     if(token)
    //     {
    //         let header = {
    //             headers : {
    //                 Authorization : `Bearer ${token}`
    //             }
    //         }
    //         axios.delete(userAuthapiPath,'api/customers/',id,header).then(Response=>{
    //         setCustomers(customers=>customers.filter(single=>single.id!==id));
    //         console.log(Response.data.customers);                
    //         })
    //     } 
    // }
    let customerid = match.params && match.params.id?match.params.id:"";
    const HandleRemoveItem = (id) => {
  
        console.log(id)
        let token = localStorage.getItem("token");
        if (token) {
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            axios.delete(userAuthapiPath+"/api/customers/"+id,header).then (res=>{
            setCustomers(customers => customers.filter(customers => customers.id !== id));
            console.log(res.customers);
                
            
        
              })
    
          }
    }


    return(
        <>
                {/* <button onClick={()=>openPopup()}>Delete</button> */}
                   {
                   deleteModel &&  <div className="main-div-of-delete-model">
                            { /* Model Header  */}
                           
                            <div class="modal-content d-flex model-header">
                                    <div className="heading6-of-deleteMethod fnt-poppins">
                                       <h6>Delete</h6>
                                    </div>

                                    <div className="close-button-of-header fnt-poppins">
                                        <span class="close" onClick={()=>setDeleteModel(false)}>&times;</span>
                                     </div>                           


                            <div className="model-body-of-deletemethod">
                                    <div className="option-text-delete-model fnt-poppins">
                                        <h6>Are you sure you want to delete this record</h6>
                                    </div>
                            </div>
                            <div className="delete-model-popup-button">

                                    <div className="yes-button">
                                        <button className="btn-blue confirm-popup-of-delete-method fnt-poppins"
                                        onClick={()=>HandleRemoveItem(customerid)}
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
                    <Style/>
                    </div>
        </>
    );
}
export default withRouter(Table);