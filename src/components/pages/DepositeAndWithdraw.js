import React, { useState, useEffect } from 'react'
import "../../styles/Deposite.css"
import { db } from '../../Firebase'
import {Redirect} from "react-router-dom"
import { get_users, withdraw_deposite } from '../clientApi'
function DepositeAndWithdraw() {

    const [users, setUsers] = useState([])
    const [operation, setoperation] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setmessage] = useState('')
    const [selectedaccount, setselectedaccount] = useState('')
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await get_users();
            setUsers(usersData);
          };
          fetchUsers();
    }, [])
    const submitHandler = async(e)=>{
        e.preventDefault()
        const data = {
            id : selectedaccount,
            method:operation,
            amount : parseInt(amount)
        }
        const res = await withdraw_deposite(data)
        console.log(res)
    }
        return (
            <div className="deposite-container">
                <h1>EXPRESS WITHDRAWAL/DEPOSITION</h1>
                <div className="form-container container">
                    <form onSubmit={submitHandler}>
                        <h2>SELECT ACCOUNT </h2>
                        <select className="customer-list-depo " value={selectedaccount} onChange={(e) => { setselectedaccount(e.target.value) }} data-flip="false" data-dropup-auto="false" >
                            <option value="">ACCOUNTS:-</option>

                            {users.map(item => {
                                return <option key={item.account} value={item.account}>{item.name}</option>
                            })}

                        </select>

                        <h2>Enter amount </h2>
                        <input className="input" value={amount} onChange={(e) => { setAmount(e.target.value) }} type="number" />

                        <h2>Deposite / Withdraw</h2>

                        <select className="customer-list-depo " value={operation} onChange={(e) => { setoperation(e.target.value) }} data-flip="false" data-dropup-auto="false"  >
                            <option value="">OPRATION:-</option>
                            <option value="deposite">DEPOSITE</option>
                            <option value="withdraw">WITHDRAW</option>
                        </select><br />
                        <button className="btndw btn-dark" type="submit">SUBMIT</button>
                    </form>
                </div>

                {/* <div className="depo-message">
                    <h1>{message}</h1>
                </div> */}

            </div>
        )
    }




export default DepositeAndWithdraw
