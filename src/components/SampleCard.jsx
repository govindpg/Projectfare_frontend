import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pro from '../images/pika-1698503903324-1x.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function SampleCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      

    <div className='d-flex gap-3'>
<Card onClick={handleShow} className='shadow-lg rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pro} />
      <Card.Body>
        <Card.Title className='text-center'>Sky savvy</Card.Title>
       
      </Card.Body>
    
    </Card>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-2 '>
          <div className='row'>
            <div className='col-6'>
              <img className='rounded' width={'100%'} src={pro}></img>
            </div>
            <div className='col-6 '>
              <h4>Description</h4>
              <p className='text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam.</p>
              <p><span className='fw-bold'>Technolgies Used:</span>  HTML,CSS ,REACT</p>
            </div>
          </div>
          <div className='p-2 '>
            <hr />
            <a className='me-2' target='_blank' href='https://github.com/govindpg/Sky_savvy-wheather_app' ><i class="fa-brands fa-github fa-2xl text-black"></i></a>
            <a className='ms-2' target='_blank' href='https://skysavvy22.netlify.app/'><i class="fa-solid fa-link fa-2xl text-black"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    

</div>

    

    
  )
}

export default SampleCard