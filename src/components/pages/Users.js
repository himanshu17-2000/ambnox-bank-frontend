import React, { useState, useEffect } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { db } from "../../Firebase"
import "../../styles/Users.css"
import { get_users } from '../clientApi'
function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await get_users();
            setUsers(usersData);
          };
      
          fetchUsers();
    }, [])
        return (
            <div className="users">
                <h1 className="history-header">CUSTOMERS</h1>
                <table className="tbl table" >
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>number</th>
                            <th>Email</th>
                            <th>Account</th>
                            <th>Amount</th>
                            <th>Transact</th>
                        </tr>
                        {users.map((item) => {


                            return (<tr key={item.account}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.account}</td>
                                <td>{item.amount}</td>
                                <td><Link to={`/home/user/${item.account}`}><button className="btnnn btn-success">Transfer</button></Link></td>
                            </tr>)


                        })}
                    </tbody>
                </table>


            </div>
        )
    

}

export default Users
