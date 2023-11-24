import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function Header() {
  return (
    
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-white' href="/"><i class="fa-solid fa-hippo me-2"></i>Project Vista</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header