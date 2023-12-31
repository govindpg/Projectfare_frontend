import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { isAuthProjectContext } from '../context/ContextShare';

function Header({dash}) {
  const {isAuthToken,setIsAuthToken}=useContext(isAuthProjectContext)

  const navigate = useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('Exisitinguser')
    
    
    navigate('/')
    setIsAuthToken(false)

  }
  return (
    
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-white' href="/"><i class="fa-solid fa-hippo me-2"></i>Project Vista</Navbar.Brand>

          {dash&&
          <button onClick={handleLogout} className='btn btn-danger'>logout</button>
          }
        </Container>
      </Navbar>
  )
}

export default Header