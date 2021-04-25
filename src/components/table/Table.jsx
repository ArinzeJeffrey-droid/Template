import React from 'react'

const Table = () => {
    return ( 
    <div className="table-container mt-3">
        <div className="recent p-2">
            <p>Recent activity</p>
        </div>
        <table className="table table-borderless bg-grey">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1/1/21</td>
                    <td>Sent</td>
                    <td>N100.00</td>
                </tr>
                <tr>
                    <td>2/2/21</td>
                    <td>Received</td>
                    <td>N200.00</td>
                </tr>                        <tr>
                    <td>3/3/21</td>
                    <td>Sent</td>
                    <td>N300.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Table;