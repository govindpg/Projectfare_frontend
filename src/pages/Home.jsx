import React from 'react'
import im1 from '../images/2201_w020_n001_1251a_p30_1251.jpg'
import { Link } from 'react-router-dom'
import SampleCard from '../components/SampleCard'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
       <>
         <div style={{width:'100%',height:'100vh',backgroundColor:'white'}}>
              <div className='container-fluid'>
                     <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-lg-6 ccol-sm-12 justify-content-center d-flex align-item-center'>
                                   <div >
                                           <h1 className='fs-1'>Project Vista</h1>
                     <p>One stop destination for all porject needs</p>
                     <button className='btn btn-success'><Link to={'/login'}>Get started</Link></button>  
                                   </div>
                         
                            </div>
                            <div className='col-lg-6 col-md-12 justify-content-center d-flex align-item-center '>
                                   <img width={'90%'} src={im1} alt='no image'></img>
                            </div>



                     </div>
             
              </div>


    </div>
    
    <div className='mt-5 '>
       <div className='d-flex justify-content-center align-items-center flex-column'>
              <h3 className='mb-3'>Explore our  Projects</h3>
              <Row>
                     <Col md={6}>   <SampleCard /></Col>
                     <Col md={6}>   <SampleCard /></Col>
                     <Col md={6}>   <SampleCard /></Col>

              </Row>
           
             
       <Link  className='mt-3' to={'/Project'}>See more projects</Link>
       </div>
       
    </div>
       
       
       </>
  
  )
}

export default Home