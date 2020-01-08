import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Style from './Style'
import axios from 'axios'
import ReactPaginate from "react-paginate";
import {apiPath} from '../../Config'
import Delete from '../DeletePopup/delete'
export default (props) => {

    let {setEditCustomer, setPrintModel, setDeleteModel} = props;
    const [pageCount, setPageCount] = useState(1);
    const [show, setShow] = useState("");

    const [fullName, setfullName] = useState("");
    const [getId, setGetId] = useState([]);

    // get all customers
    const handleRemoveItem = (id) => {
        axios.delete(apiPath + "/api/customers/" + id).then(res => {
            setCustomers(customers => customers.filter(item => item.id !== id))
            console.log(res)
            console.log(res.data)
            console.log(id)
        })
    }

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        nextCourses(1);
    }, []);

    const handlePageClick = (page) => {
        console.log(page);

        nextCourses(page.selected + 1);

    };

    const nextCourses = (page) => {
        axios.get(apiPath + `/api/customers?page=${page}&limit=10`).then(response => {
            setCustomers(response.data.customers);
            setPageCount(response.data.totalPages);
        })
    };

    const handleSubmit = (id) => {
        let payload = {
            fullName: fullName
        }

        axios.put(apiPath + '/api/customers/' + id, payload).then(Response => {
            console.log(id)
            console.log(Response.data);
        })
        //  updateList(newList);
        setfullName("")
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


                {
                    customers ? customers.map((single, index) => <tr key={single.id}
                                                                     className="section3-table-rows fnt-poppins">
                        <td>{single.fullName}</td>
                        <td>{single.address}</td>
                        <td>{single.phone}</td>
                        {/* <input placeholder="enter name" value={fullName} onChange={(e) => setfullName(e.target.value)}></input>
                         <button onClick={()=>handleSubmit(single.id)}>save</button> */}
                        <td>
                            {
                                show && show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                    <li><Link to={"/customer-money-details/" + single.id}
                                              className="link-model-on-action-buttons">View</Link>
                                    </li>
                                    <li><Link to={"/customer/" + single.id} className="link-model-on-action-buttons"
                                              onClick={() => {
                                                  setEditCustomer(true)
                                              }}>Edit</Link></li>
                                    <li><Link className="link-model-on-action-buttons" onClick={() => {
                                        setPrintModel(true)
                                    }}>Print</Link></li>
                                    <li><Link to={"/customer/" + single.id} className="link-model-on-action-buttons"
                                              onClick={() => {
                                                  setDeleteModel(true)
                                              }}>Delete</Link></li>
                                </div>

                            }
                            {/* <button onClick={()=>HandleRemoveItem(single.id)}>delete</button> */}
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
            <Style />
            <Delete customers={customers} setCustomers={setCustomers}/>
        </div>
    )
}