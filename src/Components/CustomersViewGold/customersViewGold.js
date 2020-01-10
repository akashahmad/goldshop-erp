import React, {useState, useEffect} from 'react'
import Style from './style'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {apiPath} from '../../Config'
import ReactPaginate from "react-paginate";
import {withRouter} from 'react-router-dom';
import Loader from '../../Components/commonComponents/loader'

const Table = (props) => {

    const {match} = props
    let id=match.params && match.params.id?match.params.id:"";
    let {setEditGold,viewGold,setViewGold,setSelectedId} = props;
    let {setDeleteModel} = props;
    let {setPrintModel} = props;
    let {setEditCustomer} = props;
    let {data} = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [innerLoader , setInnerLoader] =useState(true);

    useEffect(() => {
        nextCourses(1);

    }, []);


    const handlePageClick = (page) => {
        nextCourses(page.selected + 1);
    };

    const nextCourses = (page) => {
        let id = match.params && match.params.id ? match.params.id : "";
        axios.get(apiPath + `/api/gold/${id}/?page=${page}&limit=5`).then(response => {
            setViewGold(response.data.gold);
            console.log(response.data.gold);
            setPageCount(response.data.totalPages);
            setCurrentPage(response.data.currentPage);
            console.log(response.data.gold);
            setInnerLoader(false);
        })
    };


    return (
        <>
        {!innerLoader ?
        <div className="container-fluid section3-table">
            <table className="section3-table-inner">
                <tr className="section3-table-head fnt-poppins">

                    <th>Bill No</th>
                    <th>Status</th>
                    <th>Purity</th>
                    <th>Gross Weight</th>
                    <th>Pure Weight</th>
                    <th>Transaction Date</th>
                    <th>Actions</th>

                </tr>
                {viewGold ? viewGold.map((single, index) => <tr key={single.id}
                                                                className="section3-table-rows fnt-poppins">

                    <td>{single.billNo}</td>
                    <td>{single.status}</td>
                    <td>{single.purity}</td>
                    <td>{single.grossWeight}</td>
                    <td>{single.pureWeight}</td>
                    <td>{single.transactionDate}</td>

                    <td>
                        {
                            show && show === single.id &&
                            <div className="main-div-of-section3-table-popup back-image-of-popup fnt-poppins">

                                

                                <li><Link to={"/customer-gold-details/" + id} className="link-model-on-action-buttons"
                                          onClick={() => {
                                              setSelectedId(single.id)
                                              setEditGold(true)
                                          }}> Edit</Link></li>
                                <li><Link to={"/customer-gold-details/" + id} className="link-model-on-action-buttons"
                                          onClick={() => {
                                            setSelectedId(single.id);
                                              setDeleteModel(true)
                                          }}>Delete</Link></li>
                            </div>
                        }

                        <div className="action-div">
                            <button type="button" className="doted-button"
                                    onClick={() => setShow(show === single.id ? "" : single.id)}><span
                                class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </button>
                        </div>

                    </td>
                </tr>) : <h1>Loader ....</h1>}
            </table>
            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                           nextLabel={<span className="fa fa-chevron-right "> > </span>}
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
                    </div> : <Loader/> }


        </>
    )
}
export default withRouter(Table);