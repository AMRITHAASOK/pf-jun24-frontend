import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
    //to hold token from session stor
    const [token,setToken] = useState("")

    useEffect(()=>{
        setToken(sessionStorage.getItem('token'))
    },[token])
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
                <div className="col-4">
                    <ProjectCard/>
                </div>
                <div className="col-4">
                <ProjectCard/>
                </div>
                <div className="col-4">
                <ProjectCard/>
                </div>
            </div>
        </div>

        <div className=" text-center">
            <Link to={'/projects'}>
            <button className='btn btn-outline-light btn-center m-5 '>View Projects</button>

            </Link>
        </div>
    </>
  )
}

export default Home
