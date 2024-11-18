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