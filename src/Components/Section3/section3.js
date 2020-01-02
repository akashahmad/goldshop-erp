import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Style from './Style'
import axios from 'axios'
import right from '../../assects/images/chorenright.png'
import ReactPaginate from "react-paginate";
import {userAuthapiPath} from '../../Config'
import Delete from '../../Components/Delete(Popup)/delete'
export default (props) => {

    let {setEditCustomer, setPrintModel, setDeleteModel} = props;
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState("");

   
    // get all customers
    const handleRemoveItem = (id) => {

      console.log(id)
      let token = localStorage.getItem("token");
      if (token) {
          let header = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
          // window.confirm("");
          axios.delete(userAuthapiPath+"/api/customers/"+id,header).then (res=>{
          setCustomers(customers => customers.filter(item => item.id !== id))
          console.log(res)
          console.log(res.data)
          console.log(id)
          
      
            }    )
  
        }
      
  }

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

            axios.get(userAuthapiPath + `/api/customers?page=${page}&limit=10`, header).then(response => {
                setCustomers(response.data.customers);
                setPageCount(response.data.totalPages);
                setCurrentPage(response.data.currentPage);
            })
        }
    };
 

    return (

        <div className="container-fluid section3-table">
            <table className="section3-table-inner">
                <tr className="section3-table-head fnt-poppins">

                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Actions</th>
                </tr>


                {customers ? customers.map((single, index) => <tr key={single.id}
                                                                  className="section3-table-rows fnt-poppins">

                    <td>{single.fullName}</td>
                    <td>{single.address}</td>
                    <td>{single.phone}</td>

                    <td>
                        {
                            show && show === single.id &&
                            <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                <li><Link to="/customertransaction" className="link-model-on-action-buttons">View</Link>
                                </li>
                                <li><Link className="link-model-on-action-buttons" onClick={() => {
                                    setEditCustomer(true)
                                }}>Edit</Link></li>
                                <li><Link className="link-model-on-action-buttons" onClick={() => {
                                    setPrintModel(true)
                                }}>Print</Link></li>
                                <li><Link className="link-model-on-action-buttons" onClick={() => {
                                  setDeleteModel(true)
                                }}>Delete</Link></li>
                            </div>
                        }

                        <div className="action-div">
                            <button type="button" className="doted-button"
                                    onClick={() => {
                                        // console.log("show", show);
                                        // console.log("show", single.id);
                                        setShow(show === single.id ? "" : single.id)
                                    }}>
                                <span class="dot"/>
                                <span className="dot"/>
                                <span className="dot"/>
                            </button>
                        </div>

                    </td>
                </tr>) : <h1>Loader ....</h1>}
            </table>
            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "  > &#60; </span>}
                           nextLabel={<span className="fa fa-chevron-right "  > > </span>}
                           breakLabel={". . ." }
                           breakClassName={"break-me"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={handlePageClick}
                           containerClassName={"digit-icons main"}
                           subContainerClassName={"container column"}
                           activeClassName={"p-one"}/>
            <Style />
            <Delete handlePageClick={()=>handleRemoveItem()} />
        </div>
    )
}