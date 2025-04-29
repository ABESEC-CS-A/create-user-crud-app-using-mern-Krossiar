import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../App.css'
import axios  from 'axios'
const Content = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [role,setRole]=useState('')
  const [error,setError]=useState(null)
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    loadUser();
  },[])
  const loadUser=async()=>{
    try{
      const response=await axios.get("https://userapp6.onrender.com/")
      setUsers(response.data)
    }
    catch(err){
      setError(err.message)
    }
  }
  const handleSave=async()=>{
    try{
      await axios.post("https://userapp6.onrender.com/",{name,email,role})
      alert("User added successfully")
      loadUser()
    }
    catch(err){
      setError(err.message)
    }
  }
  return (
    <div>
      <Header/>
      <div className="content">
      <h1>List Of Users</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr><td colSpan="5">Errors</td></tr>}
          <tr>
                    <td>3</td>
                    <td>
                        <input type="email" placeholder = "enter email" onChange={(e) => setEmail(e.target.value)} required/>
                    </td>
                    <td>
                        <input type="text" placeholder = "enter name" onChange={(e) => setName(e.target.value)} required/>
                    </td>
                    <td>
                        <select onChange={(e) => setRole(e.target.value)} required>
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </td>
                    <td>
                        <button className='btn btn-success' onClick={() => handleSave()}>Save</button>&nbsp;
                        <button className='btn btn-danger'>Cancel</button>
                    </td>
                </tr>
          {users.map((user,index)=>(
            <tr>
              <td>{++index}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  )
}

export default Content
