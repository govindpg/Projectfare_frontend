import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"



 export const registerApi=async(users)=>{
       return await commonAPI('POST',`${BASE_URL}/user/register`,users,"") //if not given return statemnt result in auth  it will be unidentified
}
export const loginApi=async(users)=>{
       return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
}

//upload data
export const addProjectAPI=async(reqBody,reqHeaders)=>{
       return await commonAPI('POST',`${BASE_URL}/project/add`,reqBody,reqHeaders)

}

//homeproject
export const homeprojectAPI=async()=>{
       return await commonAPI('GET',`${BASE_URL}/project/home-project`)

}

//all project
export const allprojectAPI=async(searchkey,reqHeaders)=>{
       //query parmaeter =path?key=value
       return await commonAPI('GET',`${BASE_URL}/project/all-project?search=${searchkey}`,'',reqHeaders)

}
//user project
export const userprojectAPI=async(reqHeaders)=>{
       return await commonAPI('GET',`${BASE_URL}/user/all-project`,'',reqHeaders)

}
//edit project
export const editprojectAPI=async(projectId,reqBody,reqHeaders)=>{
       //id is passed as path parameter
       return await commonAPI('PUT',`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeaders)

}

//delete user proejct
export const userdeleteproject=async(projectid,reqHeaders)=>{
       return await commonAPI('DELETE',`${BASE_URL}/project/remove/${projectid}`,{},reqHeaders)

}



