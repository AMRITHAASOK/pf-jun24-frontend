import React from 'react'
import { CiSearch } from "react-icons/ci";  
function Projects() {
  return (
    <div>
      <h1 className='text-center mt-5 '>All Projects</h1>

      <div className="container d-flex justify-content-center">
          <div className="w-50 mb-5 d-flex">
            <input type="text" placeholder='Search by Technology'  className='form-control'/>
            <CiSearch className='fs-2 fw-bolder mt-1' style={{marginLeft:'-50px'}}/> 
          </div>
      </div>

    </div>
  )
}

export default Projects
