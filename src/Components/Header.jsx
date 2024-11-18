import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { FaLaptopCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
  
function Header() {
  const [logout,setLogout]= useState(false)
  const [token,setToken] = useState("")
  const navigate = useNavigate()

  const handleLogout=()=>{
    sessionStorage.clear()
    navigate('/login')
  }
  
  const getToken =()=>{
    setToken(sessionStorage.getItem("token"))
    setLogout(true)
  }

  useEffect(()=>{
    getToken()
  },
[token])
  return (
    <div>
       <h1>
       <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <FaLaptopCode  className='fs-1 mx-2 text-light'/>
          <span className='fs-2 text-light'>Project Fair</span> 
          </MDBNavbarBrand>
          {
          //  logout && <h3 onClick={handleLogout}>LogOut</h3>
          }
          
        </MDBContainer>
      </MDBNavbar>
       </h1>
    </div>
  )
}

export default Header
