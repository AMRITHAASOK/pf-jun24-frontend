import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { getallUserProjectAPI, getHomeProjectAPI } from '../services/allAPIs'

function Home() {

    //to hold token from session stor
    const [token,setToken] = useState("")

    useEffect(()=>{
        setToken(sessionStorage.getItem('token'))
    },[token])

    const [projectDetails,setProjectDetails]=useState([])
   

    const getHomeProject=async()=>{
        try{

            const response = await getHomeProjectAPI()
            console.log(response);
            if(response.status==200){
                setProjectDetails(response.data)
            }

        }       
        catch(err){
            console.log(err);
            
        }
    }

    console.log(projectDetails);//array => [ {},{}]
    

    useEffect(()=>{
            getHomeProject()
    },[])

    const checkToken=()=>{
        console.log("hh");
        
        if(!token){
            alert("Please Login")  
        }
    }


  return (
   
    <>
        <div className="row">
            <div className="col-6 p-5 my-5">
               <h1>Project Fair</h1>
               <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo unde sit ut sequi culpa, minus, iusto est quisquam quasi dicta enim sunt in! Repellendus a debitis odit? Quo, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam consequuntur, debitis voluptatum optio, expedita incidunt iusto esse animi sed praesentium tenetur repellat sequi quaerat quis suscipit, nemo non mollitia.</p>
               <div> 
                {
                    token ? <Link to={'/dashboard'}>
                    <button className='btn btn-dark my-5'>View Dashboard </button>
                    </Link> :
                    <Link to={'/login'}>
                    <button className='btn btn-dark my-5'>Get Started</button>
                    </Link>
                }
                
                
               </div>
            </div>
            <div className="col-6 text-center ">
            <img width={'500px'} height={'550px'} src="https://cdn3d.iconscout.com/3d/premium/thumb/male-developer-5359995-4492094.png" alt="" />
            </div>
        </div>

        <div className="container my-5 py-5">
            <h1 className='text-center m-5'>Explore Our Projects</h1>
            <div className="row d-flex ">
                {
                    projectDetails.length>0?
                    projectDetails.map((item)=>(
                        <div className="col-4">
                        <ProjectCard project={item}/>
                    </div>
                    ))
                    
                    :"Cant load projects..."
                }
               
              
            </div>
        </div>

        <div className=" text-center">
            {
                token ?
                <Link to={'/projects'}>
            <button onClick={checkToken}  className='btn btn-outline-light btn-center m-5 '>View Projects</button>

            </Link>
            :
          
            <button onClick={checkToken}  className='btn btn-outline-light btn-center m-5 '>View Projects</button>

           
            }
            
        </div>
    </>
  )
}

export default Home
