
import View from '../Components/View'
import Add from '../Components/Add'
import React, { useEffect, useState } from 'react';

import Profile from '../Components/Profile';
function Dashboard() {
  
    const [username,setUsername] = useState("")
 
    useEffect(()=>{
    setUsername(sessionStorage.getItem("username"))
  },[])

  return (
    <div>
       <div className="row">
        <div className="col-6">
          <h1 className='m-5'>Welcome {username}</h1>
        </div>
        <div className="col-6">
          <button className='btn btn-primary' style={{float:'right'}}>Logout</button>
        </div>
       </div>
       <div className="row">
        <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <h1 className='mx-5'>My Project</h1>
                  </div>
                  <div className="col-6" >
                    <Add/>
                  </div>
                </div>
         <View/>
        </div>
        <div className="col-3 text-center">
          <Profile/>
        </div>
       </div>
    </div>
  )
}

export default Dashboard
