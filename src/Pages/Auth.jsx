import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
  
  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async () => {

    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.warn('pleased fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       
        });
    }
    else {
      try {

        const result = await registerAPI(userDetails)
        console.log(result);
        if(result.status>=200 && result.status<=300){
          toast.success('Register Successfull...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         
            });
           setTimeout(()=>{
            navigate('/login')
           },6000)
        }
        else{
          toast.error(result.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }

      }
      catch (err) {
        
        toast.error("Error :" + err, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });

      }
    }


  }

  const handleLogin =async()=>{
    const{email,password}=userDetails
      if(!email,!password){
        alert("Please Fill the form")
      }
      else{
        try{
          const result = await loginAPI(userDetails)
          console.log(result);

          if(result.status>=200 && result.status<=300){
            toast.success('Login Successfull...', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
           
              });
              sessionStorage.setItem("token",result.data.token)
              sessionStorage.setItem("username",result.data.user.username)
             
              setTimeout(()=>{
              navigate('/')
             },6000)
          }
          else{
            toast.error(result.response.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              });
          }
        }
        catch(err){
          toast.error("Error :" + err, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
          
        }
      }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" width={'100% '} alt="" />
          </div>
          <div className="col-6">


            <form className='m-5 p-5 shadow '>
              <h1 className='text-center m-4 '>Sign {register ? "Up" : "In"}</h1>
              {
                register &&
                <input type="text" onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} placeholder='Username' className='form-control mb-3' />

              }
              <input type="text" placeholder='Email' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} className='form-control mb-3' />
              <input type="password" onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' className='form-control mb-3' />

              {
                register ?
                  <div className='text-center '>
                    <button className='btn btn-outline-light m-3' onClick={handleRegister} type='button'>Sign Up</button>
                    <p>Already registred ? <Link to={"/login"}>please login from here</Link> </p>
                  </div>
                  :
                  <div className='text-center '>
                    <button className='btn btn-outline-light m-3' onClick={handleLogin} type='button'>Sign In</button>
                    <p>New to here ? <Link to={"/register"} >please Register from here</Link> </p>
                  </div>
              }

            </form>
          </div>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default Auth
