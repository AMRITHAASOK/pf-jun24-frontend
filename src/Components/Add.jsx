import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { addProjectAPI } from '../services/allAPIs';

function Add() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const [projectDetails,setProjectDetails]=useState({
    title:"",language:"",github:"",link:"",description:"",projectImg:""
  })
  //step 1
  const [preview,setPreview] = useState("")

  const handleAdd=async()=>{
    console.log(projectDetails);
    const {title,language,github,link,description,projectImg}=projectDetails
    if(!title || !language||!github||!link||!description||!projectImg){
        alert("Please fill the form")
    }
    else{
        //api fetching
        const reqBody = new FormData()
        reqBody.append("title",title),
        reqBody.append("language",language),
        reqBody.append("github",github),
        reqBody.append("link",link),
        reqBody.append("description",description),
        reqBody.append("projectImg",projectImg)

        const token= sessionStorage.getItem("token")
        console.log(token);
        
        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          console.log(reqHeader);
          
          try{
              const response = await addProjectAPI(reqBody,reqHeader)
              console.log(response);
              if(response.status==200){
                alert("Project Added successfully")
                setProjectDetails({
                  title:"",language:"",github:"",link:"",description:"",projectImg:""
                })
                setPreview("")
                toggleOpen()

              }
              else{
                console.log("error"+response.response.data);
                
              }
          }
          catch(err){
              console.log("Error" +err);
              
          }
        }
    }
    
  }
  useEffect(()=>{
    //step 2 convert image file into url
        if(projectDetails.projectImg){
            setPreview(URL.createObjectURL(projectDetails.projectImg))
        } 
      
  },[projectDetails.projectImg])

  return (
    <div>
    <MDBBtn onClick={toggleOpen} >Add</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1' >
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Name</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-6 p-5">
                  <label>
                    <input  onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type="file" style={{display:'none'}}/>
                    <img  src={preview?preview:"https://th.bing.com/th/id/OIP.6QnqBNa9u9vYEeM6Qt2anwHaEK?rs=1&pid=ImgDetMain"} width={'100%'} alt="" />
                  </label>
                </div>
                <div className="col-6">
                  <input onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" placeholder='Title' className='form-control mb-3' />
                  <input onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})}  type="text" placeholder='Language' className='form-control mb-3' />
                  <input onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}  type="text" placeholder='Github' className='form-control mb-3' />
                  <input onChange={e=>setProjectDetails({...projectDetails,link:e.target.value})}  type="text" placeholder='Website' className='form-control mb-3' />
                  <input onChange={e=>setProjectDetails({...projectDetails,description:e.target.value})}  type="text" placeholder='Overview' className='form-control mb-3' />
                </div>
              </div>

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Cancel
              </MDBBtn>
              <MDBBtn onClick={handleAdd}>Add</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Add
