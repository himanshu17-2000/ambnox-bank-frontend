import React, { useEffect, useState } from 'react'
import {  Redirect } from 'react-router-dom'
import { db } from '../../Firebase'
import "../../styles/History.css"
import axios from 'axios'
import { get_transactions } from '../clientApi'
function History() {
    const [history, sethistory] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const historyTransactions = await get_transactions();
            sethistory(historyTransactions);
          };
          fetchUsers(); 
    }, [])

    
        return (
            <div className="history" >
                <h1 className="history-header">TRANSACTION HISTORY</h1>
                <table className="tble ">
                    <tbody>
                        <tr>
                            <th>date</th>
                            <th>time</th>
                            <th>from</th>
                            <th>to</th>
                            <th>money</th></tr>
                        
                        {history.map((item) => {

                            return (
                                <tr key={item.time}>
                                    <td>{item.time.split(" ")[0]}</td>
                                    <td>{item.time.split(" ")[1]}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.amount}</td>
                                </tr>)


                        })}

                    </tbody>
                </table>
            </div>
        )

}

export default History
