// const {commonAPI } = require("./commonAPI");
// const { serverUrl } = require("./serverUrl");

import commonAPI from "./commonAPI"
import { serverUrl } from "./serverUrl"

export const registerAPI =async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/api/register`,reqBody,"")
}


export const loginAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/api/login`,reqBody,"")
}

export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('post',`${serverUrl}/api/addProject`,reqBody,reqHeader)
 
}

export const getHomeProjectAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/api/getHomeProject`,"","")
}

export const getallUserProjectAPI=async(searchKey,reqHeader)=>{
    return await commonAPI('get',`${serverUrl}/api/getAllUserProject?search=${searchKey}`,"",reqHeader)
}

export const getAUserProjectAPI=async(reqHeader)=>{
    return await commonAPI('get',`${serverUrl}/api/getAUserProject`,"",reqHeader)
}

export const deleteProjectAPI=async(projectId,reqHeader)=>{
    return await commonAPI('delete',`${serverUrl}/api/deleteProject/${projectId}`,{},reqHeader)
}

export const updateProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI('put',`${serverUrl}/api/updateProject/${projectId}`,reqBody,reqHeader)
}