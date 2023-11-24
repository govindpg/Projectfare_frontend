import React from 'react'
import Header from '../components/Header'
import SampleCard from '../components/SampleCard'
import { Col, Row } from 'react-bootstrap'

function Project() {
  return (
    <div>
      <Header/>
      
        <div className='container-fluid d-flex flex-column mb-5 mt-5 '>
        <h2 className='text-center'>All Projects</h2>
      <div className='d-flex mt-3 justify-content-center'>
    <input className='form-control w-25  ' placeholder='search the project using tecnlogy'/>
    <button className='btn btn-outline'>Search</button>
    
      </div>
      <Row>
                     <Col md={6} lg={4} sm={12}>   <SampleCard /></Col>
                  

              </Row>
      </div>
      
      
    </div>
  )
}

export default Project