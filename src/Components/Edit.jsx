import React, { useContext, useEffect, useState } from 'react'
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
import { updateProjectAPI } from '../services/allAPIs';
import projectImage from '../assets/projectImage.jpg'
import { FaEdit } from "react-icons/fa";
import { serverUrl } from '../services/serverUrl';
import {updateContextResponse} from '../ContextAPI/ContextShare'

function Edit({project}) {
  console.log(project);
  const {updateContext,setUpdateContext} = useContext(updateContextResponse)
 
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const [projectDetails,setProjectDetails]=useState({
    id:project._id,
    title:project.title,
    language:project.language,
    github:project.github,
    link:project.link,
    description:project.description,
    projectImg:""
  })
  //step 1
  const [preview,setPreview] = useState("")
  const handleUpdate=async()=>{
    console.log(projectDetails);
    const {id,title,language,github,link,description,projectImg}=projectDetails
        //api fetching
        const reqBody = new FormData()
        reqBody.append("title",title),
        reqBody.append("language",language),
        reqBody.append("github",github),
        reqBody.append("link",link),
        reqBody.append("description",description),
        preview?reqBody.append("projectImg",projectImg):reqBody.append("projectImage",project.projectImage)
        //reqBody.append()
        const token= sessionStorage.getItem("token")
        console.log(token);
        
        if(preview){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          console.log(reqHeader);
          
          try{
              const response = await updateProjectAPI(id,reqBody,reqHeader)
              console.log(response);
              if(response.status==200){
                alert("Project Updated successfully")
                toggleOpen()
                setUpdateContext(response.data)

              }
              else{
                console.log("error"+response.response.data);
                
              }
          }
          catch(err){
              console.log("Error" +err);
              
          }
        }
        else{
          const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          console.log(reqHeader);
          
          try{
              const response = await updateProjectAPI(id,reqBody,reqHeader)
              console.log(response);
              if(response.status==200){
                alert("Project Updated successfully")
                setUpdateContext(response.data)
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
       
    //}
    
  }
  useEffect(()=>{
    //step 2 convert image file into url
        if(projectDetails.projectImg){
            setPreview(URL.createObjectURL(projectDetails.projectImg))
        } 
      
  },[projectDetails.projectImg])
  return (
     <div>
          
    <p onClick={toggleOpen} ><FaEdit className='fs-3 me-3' /></p>
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
                    <img  src={preview?preview: `${serverUrl}/uploads/${project.projectImg}`} width={'100%'} alt="preview" />
                  </label>
                </div>
                <div className="col-6">
                  <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" placeholder='Title' className='form-control mb-3' />

                  <input value={projectDetails.language}  onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})}  type="text" placeholder='Language' className='form-control mb-3' />

                  <input value={projectDetails.github}  onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}  type="text" placeholder='Github' className='form-control mb-3' />

                  <input value={projectDetails.link}  onChange={e=>setProjectDetails({...projectDetails,link:e.target.value})}  type="text" placeholder='Website' className='form-control mb-3' />

                  <input value={projectDetails.description}  onChange={e=>setProjectDetails({...projectDetails,description:e.target.value})}  type="text" placeholder='Overview' className='form-control mb-3' />
                </div>
              </div>

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Cancel
              </MDBBtn>
              <MDBBtn onClick={handleUpdate}>Update</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Edit
