import React from 'react'
import '../../assects/style/common.css'

export default ()=>{
    return(
        <>
            <table>

                <thead className="table-heading-bill">
                    <tr className="table-headings">
                        <td>Bill No</td>
                        <td>Details</td>
                        <td>Date</td>
                        <td>Amt Sent</td>
                        <td>Amt Recieved</td>
                        <td>Currency Type</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="table-body-data">
                        <div className="table-body-div">
                            
                            <div>
                            <td className="ml-2">0001</td>
                            </div>
                            
                            <div>
                            <td>Lorem Ipsum dolar</td>
                            </div>

                            <div className="margin mr-5">
                            <td >Dec 12,2019</td>
                            </div>

                            <div>
                            <td>66,000.00</td>
                            </div>

                            <div>
                            <td>80,000.00</td>
                            </div>

                            <div>
                            <td>PKR</td>
                            </div>
                        </div>
                    </tr>
                </tbody>

            </table>
        
        </>
    );
}