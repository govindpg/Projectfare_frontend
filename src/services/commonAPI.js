import axios from "axios"

export const commonAPI =async(httprequest,url,reqbody,reqHeader)=>{
       const reqConfig={
              method:httprequest,
              url,
              data:reqbody,
              headers:reqHeader?reqHeader:{"Content-Type":"application/json"} //due to we have to types of data or online date multipart/form data
       }
    return   await axios(reqConfig).then((result)=>{ //here retur in thsi line is result return this or retutn err
              return result
       }).catch((err)=>{
              return err
       })
}