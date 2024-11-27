import React, { useContext, useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
import { deleteProjectAPI, getAUserProjectAPI } from '../services/allAPIs';
import {addContextResponse, updateContextResponse} from '../ContextAPI/ContextShare'
import Edit from './Edit';


function View() {
  //context
  const {addContext,setAddContext} = useContext(addContextResponse)
  const {updateContext,setUpdateContext} = useContext(updateContextResponse)

  const [allProject,setAllProject]=useState([])

    const getAUserProject=async()=>{
      const token= sessionStorage.getItem("token")
      console.log(token);
      
      if(token){
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        console.log(reqHeader);
      try{
          const response = await getAUserProjectAPI(reqHeader)
          console.log(response);
          setAllProject(response.data)
          
          
      }
      catch(err){
        console.log(err);
     
        
      }
    }
    else{
      console.log("please login");
      ;
     
    }
    }

    useEffect(()=>{
      getAUserProject()
    },[addContext,updateContext])
  
    const deleteProject=async(projectId)=>{
      const token= sessionStorage.getItem("token")
      console.log(token);
      
      if(token){
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        console.log(reqHeader);
      try{
          const response = await deleteProjectAPI(projectId,reqHeader)
          console.log(response);
          alert(response.data)
         window.location.reload()
          
          
      }
      catch(err){
        console.log(err);
     
        
      }
    }
    else{
      console.log("please login");
      ;
     
    }    }
  return (
    <div>
        
          <div className="col w-50 p-5">
           {
            allProject.length>0 ? allProject.map((item)=>(
              <div className="card shadow d-flex flex-row justify-content-between p-3 mb-3 ">
              <h4>{item.title}</h4>
              <div className='d-flex justify-content-evenly' >
              <FaGithub className='fs-3 mx-3'/>
              <FaLink className='fs-3 me-3' />
              <Edit project={item}/>
              <MdDelete onClick={()=>deleteProject(item._id)} className='fs-3 me-3 text-danger'/>
              </div>
          </div>
            )) :"Not found"
           }
          </div>
        </div>
    
  )
}

export default View
