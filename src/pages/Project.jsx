import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SampleCard from '../components/SampleCard'
import { Col, Row } from 'react-bootstrap'
import { allprojectAPI } from '../services/allApi'
import { Link } from 'react-router-dom'

function Project() {
const [allProject ,setAllProject] =useState([])
const [searchkey,setSearchkey]=useState('')
const [isToken,setIstoken]=useState(false)
console.log(searchkey);
  const getAllProject=async()=>{

    if(sessionStorage.getItem('token')){
      const token =sessionStorage.getItem('token')
      const reqHeaders={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await allprojectAPI(searchkey,reqHeaders)
      console.log(result);
      if(result.status === 200){
        setAllProject(result.data)
      }else{
        console.log(result.response.data);
      }

    }

  }
    console.log(allProject);
  useEffect(()=>{
    getAllProject()
  },[searchkey])

  useEffect(()=>{
if(sessionStorage.getItem('token')){
  setIstoken(true)
}
  },[])

  return (
    <div>
      <Header/>
      
        <div className='container-fluid d-flex flex-column mb-5 mt-5 '>
        <h2 className='text-center'>All Projects</h2>
      <div className='d-flex mt-3 justify-content-center'>
    <input className='form-control w-25  ' value={searchkey} onChange={(e)=>setSearchkey(e.target.value)} placeholder='search the project using tecnlogy'/>
    <button className='btn btn-outline border border-2  ms-2'>Search</button>
    
      </div>
      <Row>
                    {allProject?.length>0?
                    allProject.map((item)=>(<Col lg={3} md={2} sm={1} className='mt-3 d-flex justify-content-center' md={6} lg={4} sm={12}>   <SampleCard   home={item}  /></Col>))
                    :
                    <div>
                      {isToken?<p className='text-center mt-3 fs-3'>sorry there is no such project</p>:
                      <div className='d-flex justify-content-center flex-column'>
                      <img src='https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif' width={'200px'} height={'200px'}></img>
                      <p>Please <Link to={"/login"}>login</Link> to see more</p>
                    </div>}
                    </div>
                    

                    }
                  

              </Row>
      </div>
      
      
    </div>
  )
}

export default Project