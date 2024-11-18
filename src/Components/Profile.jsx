import React, { useState } from 'react'
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { BiCollapseVertical } from "react-icons/bi";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen); 
  return (
    <div>
         <div className='d-flex '>
             <h3 className='mx-5 '>Profile Update</h3>   <button className='btn' onClick={toggleOpen}><BiCollapseVertical className='fs-1' /></button>
             </div>

              
              <MDBCollapse open={isOpen}>
              <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" width={'100px'} 
              height={'100px'} alt="" />
              <form className='p-5'>
              <input type="text" placeholder='Username' className='form-control mb-3'/>
              <input type="text" placeholder='Username' className='form-control mb-3'/>
              <input type="text" placeholder='Username' className='form-control mb-3'/>
              <div className='text-center'>
                <button className='btn btn-light'>Update</button>
              </div>
              </form>
      </MDBCollapse>
    </div>
  )
}

export default Profile
