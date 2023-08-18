    import React, { useEffect, useState } from 'react'
    import {  Redirect } from 'react-router-dom'
    import { useParams } from 'react-router'
    import "../../styles/Demo.css"
    import { db , timestamp } from '../../Firebase'
    import { get_user_by_id, get_users, transferData } from '../clientApi'


    const UserTransfer = () => {
        const { transfer } = useParams()
        const from_account_id = transfer
        const [sendingUser , setSendingUser] = useState({})
        const [allUsers, setAllUsers] = useState([])
        const [toname, settoname] = useState("")
        const [money, setmoney] = useState("")
        
       

        useEffect(() => {
            const fetchUsers = async () => {
                const usersData = await get_users();
                console.log(usersData[0], usersData)
                setAllUsers(usersData)
            };
          
            fetchUsers();
        }, [])
        useEffect(() => {
            const fetchUser = async () => {
                
                const userData = await get_user_by_id(from_account_id);
                console.log(userData)
                setSendingUser(userData)
            }; 
            fetchUser();
        }, [])
        // console.log(sendingUser)
        // console.log(allUsers)
        const submithandler = async (e) =>{
            e.preventDefault()
            const data={
                to_account : toname,
                from_account: from_account_id,
                amount: parseInt(money)
            }
            console.log(data)   
            const res = await transferData(data)
            console.log(res)

        }
            return (
                <div className="demo-class">
                    <h1 className="demo-header">AMBNOX EXPRESS TRANSFER</h1>
                    <div className="demo-intro">
                        <span id="name">Name :- {sendingUser.name}</span><br />
                        <span id="account">Account :- {sendingUser.account}</span><br />
                        <span id="amount">Amount :- {sendingUser.amount}</span><br />
                    </div>
                    <form className="demo-form" onSubmit={submithandler}>
                        <span>Reciever : </span>
                        <select className="customer-list " data-flip="false" data-dropup-auto="false" value={toname} onChange={(e) => {
                            settoname(e.target.value)
                        }}>
                            <option value="">customers:-</option>
                            
                            {allUsers.map(item => {
                                return <option key={item.account} value={item.account}>{item.name}</option>
                            })}

                        </select>


                        <br />
                        <br />
                        <span>Amount : </span>
                        <input type="number" value={money} onChange={(e) => {
                            setmoney(e.target.value)
                        }} />
                        <br />


                        <br />
                        <br />
                        <button className="btnn btn-success" type="submit"  >Submit</button>
                    </form>
                    {/* <h1 className="demo-message">{message}</h1> */}
                </div >
            )

                        

    }




    export default UserTransfer
