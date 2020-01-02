import React, { useState , useEffect } from 'react'
import Style from './style'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { userAuthapiPath } from '../../Config'
import ReactPaginate from "react-paginate";

export default (props) => {
    let {setDeleteModel}=props;
    let {setEditMoney}=props;
    let { data } = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");

    // axios.get value of view money
    const [viewMoney , setViewMoney]=useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
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

            axios.get(userAuthapiPath +`/api/money/?${page}`, header).then(response => {
                setViewMoney(response.data.data);
                setPageCount(response.data.totalPages);
                setCurrentPage(response.data.currentPage);
            })
        }
    };


    // axios .delete

    const deleteTransaction=(id)=>{
        let token = localStorage.getItem("token");
        if(token){
            let header ={
                headers : {
                    Authorization : `Bearer ${token} `
                }
            }
            window.confirm("Are You Sure You Want to Delete Data");
            axios.delete(userAuthapiPath+'/api/money/'+id,header).then(response=>{
                setViewMoney(viewMoney=>viewMoney.filter(single=>single.id!==id))
            })
        }
    }


    return (
        <>

            <div className="container-fluid section3-table">
                <table className="section3-table-inner">
                    <tr className="section3-table-head fnt-poppins">

                        <th>Bill No</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Currency</th>
                        <th>Detail</th>
                        <th>Transaction Date</th>
                        <th>Action</th>

                    </tr>
                    {viewMoney ? viewMoney.map((single, index) => <tr key={single.id} className="section3-table-rows fnt-poppins">

                        <td>{single.billNo}</td>
                        <td>{single.amount}</td>
                        <td>{single.status}</td>
                        <td>{single.currency}</td>
                        <td>{single.detail}</td>
                        <td>{single.transactionDate}</td>
                        <td>
                            {
                                show === single.id &&
                                <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">
                                                                        
                                    <li > <Link className="link-model-on-action-buttons" onClick={()=>{setEditMoney(true)}}> Edit</Link></li>
                                    <li> <Link className="link-model-on-action-buttons" onClick={()=>{setDeleteModel(true) ; deleteTransaction(single.id)}}>Delete</Link></li>
                                    
                                </div>
                            }

                            <div className="action-div">
                                <button type="button" className="doted-button" onClick={() => setShow(show === single.id ? "" : single.id)}> <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
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
            </div>
        </>
    )
}