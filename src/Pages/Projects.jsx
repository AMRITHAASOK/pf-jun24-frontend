import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";  
import { getallUserProjectAPI } from '../services/allAPIs';
import ProjectCard from '../Components/ProjectCard';
import { all } from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Projects() {

  //to hold searching value from the input box
  const [searchKey,setSearchKey]=useState("")

  const [allproject,setAllProject]=useState([])
    const getAlluserProject=async()=>{

      const token= sessionStorage.getItem("token")
      console.log(token);
      
      if(token){
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        console.log(reqHeader);
      try{
          const response = await getallUserProjectAPI(searchKey,reqHeader)
          console.log(response);
          setAllProject(response.data)
          
          
      }
      catch(err){
        console.log(err);
     
        
      }
    }
    else{
      alert("please login");
     
    }
    }
    console.log(allproject);
    
    useEffect(()=>{
      getAlluserProject()
    },[searchKey])
  return (
    <div>
      <h1 className='text-center mt-5 '>All Projects</h1>

      <div className="container d-flex justify-content-center">
          <div className="w-50 mb-5 d-flex">

            <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search by Technology'  className='form-control'/>
            <CiSearch className='fs-2 fw-bolder mt-1' style={{marginLeft:'-50px'}}/> 
          </div>
      </div>

      <Row className='p-5'>
        {
          allproject.length>0?allproject.map((item)=>(
            
          
            <Col  xs lg="4"  >
                <ProjectCard project={item}/>
            </Col>
          )
        ):"Not found..."
        }
      </Row>

    </div>
  )
}

export default Projects
