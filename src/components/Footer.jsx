import React from 'react'

function footer() {
  return (
    <div className='row p-3 bg-dark' >
       <div className='col-3'>
              <h5 className='fw-bold text-white'><i class="fa-solid fa-hippo"></i>Project Vista</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, blanditiis.</p>
       </div>
       <div className='col-3'>
              <h4 className='fw-bold'>Products</h4>
              <ul style={{listStyle:'none'}}>
                     <li>angular</li>
                     <li>React</li>
                     <li>bootstrap</li>
                     <li>Css</li>
              </ul>
       </div>
       <div className='col-3'>
       <h4 className='fw-bold'>Useful Links</h4>
              <ul style={{listStyle:'none'}}>
                     <li>Home</li>
                     <li>Login</li>
                     <li>Project</li>
                     <li>Register</li>
              </ul>
       </div>
       <div className='col-3'>
       <h4 className='fw-bold'>Contacts</h4>
       <ul style={{listStyle:'none'}}>
                     <li><i class="fa-solid fa-house"></i>NewYork ,NY US</li>
                     <li><i class="fa-solid fa-envelope"></i>info@example.com</li>
                     <li><i class="fa-solid fa-phone"></i>+486378534</li>
                     <li><i class="fa-solid fa-print"></i>+8t74</li>
              </ul>
       </div>
       <hr/>
       <p className='text-center'>@2023 copywrite project vista</p>


    </div>
  )
}

export default footer