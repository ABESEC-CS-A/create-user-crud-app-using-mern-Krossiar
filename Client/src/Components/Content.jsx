import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
const Content = () => {
  const [users,setUser]=useState([])
  const [error,setError]=useState(null)
  useEffect(()=>{
    fetchUser()
  },[])
  const fetchUser=async()=>{
    try{
      const res= await axios.get("https://userapp6.onrender.com/users")
      setUser(res.data)
    }
    catch(err){
      setError(err.message)
    }
  }
  return (
    <div className='content'>
      <h1>List Of user</h1>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>SR.No</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr><td colspan='5'>Error</td></tr>}
          {users.map((user,index)=>(
            <tr>
              <td>{++index}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            <td>
              <button>Edit</button>&nbsp
              <button>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Content