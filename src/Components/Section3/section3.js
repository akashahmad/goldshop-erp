import React, {useState, useEffect,useRef } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Style from './Style'
import axios from 'axios'
import ReactPaginate from "react-paginate";
import {apiPath} from '../../Config'
import Delete from '../DeletePopup/delete'
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import UseOutSideClick from '../../useOutsideClick'
const EditCustomer = (props) => {
    const ref = useRef();
    let {history, setEditCustomer, setPrintModel, setDeleteModel, setSelectedId, customers, setCustomers} = props;
    const [pageCount, setPageCount] = useState(1);
    const [show, setShow] = useState("");
    const [hoverId, setHoverId] = useState("");
    UseOutSideClick(ref, () => {
        if (show) setShow(false);
      });
    
    useEffect(() => {
        nextCourses(1);
    }, []);
    const handlePageClick = (page) => {
        nextCourses(page.selected + 1);
    };
    const nextCourses = (page) => {
        axios.get(apiPath + `/api/customers?page=${page}&limit=6`).then(response => {
            setCustomers(response.data.customers);
            setPageCount(response.data.totalPages);
        })
    };
    return (
       
        <div className="container-fluid section3-table">
            
            <table className="section3-table-inner">
                <tr className="section3-table-head fnt-poppins">
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th className="no-print">Actions</th>
                </tr>
                {
                    customers ? customers.map((single, index) => <tr key={index}
                                                                     className={"section3-table-rows fnt-poppins " + (hoverId && hoverId === single.id ? "hovers" : "")}>
                        <td onClick={() => {
                            history.push("/customer-money-details/" + single.id);
                            setEditCustomer(true)
                        }}
                            onMouseEnter={() => setHoverId(single.id)}
                            onMouseLeave={() => setHoverId("")}
                        >{single.fullName}</td>
                        <td onClick={() => {
                            history.push("/customer-money-details/" + single.id);
                            setEditCustomer(true)
                        }}
                            onMouseEnter={() => setHoverId(single.id)}
                            onMouseLeave={() => setHoverId("")}
                        >{single.address}</td>
                        <td onClick={() => {
                            history.push("/customer-money-details/" + single.id);
                            setEditCustomer(true)
                        }}
                            onMouseEnter={() => setHoverId(single.id)}
                            onMouseLeave={() => setHoverId("")}
                        >{single.phone}</td>
                        {/* <input placeholder="enter name" value={fullName} onChange={(e) => setfullName(e.target.value)}></input>
                         <button onClick={()=>handleSubmit(single.id)}>save</button> */}
                        <td>
                            {
                                show && show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                    <li><Link to={"/customer-money-details/" + single.id}
                                              className="link-model-on-action-buttons">View</Link>
                                    </li>
                                    <li><Link  className="link-model-on-action-buttons"><div 
                                              onClick={() => {
                                                  setSelectedId(single.id);
                                                  setEditCustomer(true)
                                              }}>Edit</div></Link></li>
                                    <li><Link className="link-model-on-action-buttons" onClick={() => {
                                        setPrintModel(true)
                                    }}>Print</Link></li>
                                    <li><Link to={"/dashboard"} className="link-model-on-action-buttons"
                                              onClick={() => {
                                                  setSelectedId(single.id);
                                                  setDeleteModel(true)
                                              }}>Delete</Link></li>
                                </div>
                            }
                            <div className="action-div no-print" ref={ref}>
                                <button type="button" className="doted-button"
                                        onClick={() => {
                                            setShow(show === single.id ? "" : single.id)
                                            setEditCustomer(false)
                                        }}>
                                    <span className="dot"/>
                                    <span className="dot"/>
                                    <span className="dot"/>
                                </button>
                            </div>
                        </td>
                    </tr>) : <h1>Loader ....</h1>}
            </table>
            <div className="no-print">
            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                           nextLabel={<span className="fa fa-chevron-right "> > </span>}
                           breakLabel={". . ."}
                           breakClassName={"break-me"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={handlePageClick}
                           containerClassName={"digit-icons main"}
                           subContainerClassName={"container column"}
                           activeClassName={"p-one"}/>
                           </div>
            <Style />
        </div>
     
    )
};

export  default withRouter(EditCustomer);