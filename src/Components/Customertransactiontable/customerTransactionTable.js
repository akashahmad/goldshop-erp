import React, {useState, useEffect,useRef} from 'react'
import Style from './style'
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios'
import {apiPath} from '../../Config'
import ReactPaginate from "react-paginate";
import Loader from '../../Components/commonComponents/loader/index'
import UseOutSideClick from '../../useOutsideClick'
const Table = (props) => {
    const ref = useRef();
    let {match} = props;
    let {setDeleteModel,setSelectedId,viewMoney,setViewMoney} = props;
    let {setEditMoney} = props;
    let {data} = props;
    let customers = data ? (data.customers ? data.customers : "") : "";
    const [show, setShow] = useState("");
    const [innerLoader,setInnerLoader]=useState(true);
    // axios.get value of view money
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
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
        setInnerLoader(true)
        let id = match.params && match.params.id ? match.params.id : "";
        axios.get(apiPath + `/api/money/${id}/?page=${page}&limit=5`).then(response => {
            setViewMoney(response.data.money);
            setPageCount(response.data.totalPages);
            setCurrentPage(response.data.currentPage);
            setInnerLoader(false)
        })
    };
    return (
        <>
{ !innerLoader ?
        <div className="container-fluid section3-table">
            <table className="section3-table-inner">
                <tr className="section3-table-head fnt-poppins">

                    <th>Bill No</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Currency</th>
                    <th>Detail</th>
                    <th>Transaction Date</th>
                    <th className="no-print">Action</th>

                </tr>
                {viewMoney ? viewMoney.map((single, index) => <tr key={single.id}
                                                                  className="section3-table-rows fnt-poppins">

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

                                <li ><Link className="link-model-on-action-buttons" onClick={() => {
                                    setSelectedId(single.id);
                                    setEditMoney(true)
                                }}> Edit</Link></li>
                                <li><Link className="link-model-on-action-buttons" onClick={() => {
                                      setSelectedId(single.id);
                                     setDeleteModel(true)
                                }}>Delete</Link></li>

                            </div>
                        }

                        <div className="action-div no-print" ref={ref}>
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
            <div className="no-print">
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
                           activeClassName={"p-one"}/></div>
            <Style />
        </div>
        : <Loader/>}
        </>
    )
}
export default withRouter(Table);