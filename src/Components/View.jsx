import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function View() {
  return (
    <div>
        
          <div className="col w-50 p-5">
            <div className="card shadow d-flex flex-row justify-content-between p-3 ">
                <h4>Project Title</h4>
                <div className='d-flex justify-content-evenly' >
                <FaGithub className='fs-3 mx-3'/>
                <FaLink className='fs-3 me-3' />
                <FaEdit className='fs-3 me-3' />
                <MdDelete className='fs-3 me-3 text-danger'/>
                </div>
            </div>
          </div>
        </div>
    
  )
}

export default View
