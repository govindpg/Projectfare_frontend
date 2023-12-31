import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Mypro from '../components/Mypro'
import Profile from '../components/Profile'

function Dashboard({dashboard}) {
  const dash=dashboard

  const [name,setName]=useState('')
  useEffect(()=>{
  setName(JSON.parse(sessionStorage.getItem('Exisitinguser')).username)
  
  },[])

  return (
    <>
    <Header dash/>
    <h1 className='mt-4 mb-4 ms-3 '>Welcome <span className='text-warning'>{name}</span> </h1>
    <Row className='mt-3 mb-3 container-fluid'>
      <Col md={8}><Mypro/></Col>
      <Col md={4}><Profile/></Col>
    </Row>
    </>
  )
}

export default Dashboard