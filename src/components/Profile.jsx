import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseurl';

function Profile() {
       const [open, setOpen] = useState(false);

       const [userProfile,setUserProfile]=useState({
        username:'',
        email:'',
        password:'',
        github:'',
        linkdin:'',
        profile:''
       })
       //once an image is uploaded then that image will be stored in the exisitng image
       const[exisiingimage,setExisitingimage]= useState('')

       //to hold the url of the new image
       const[preview,setPreview]=useState('')

       const handledit=async()=>{

       }

       useEffect(()=>{
        const user =JSON.parse(sessionStorage.getItem('Exisitinguser'))

        setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.github,linkdin:user.linkdin,profile:''})

        setExisitingimage(user.profile)
       },[])
       useEffect(()=>{
         if(userProfile.profile){
          setPreview(URL.createObjectURL(userProfile.profile))
         }else{
          setPreview('')
         }
       },[userProfile.profile])

  return (
    <div className='border shadow p-2'>
       <div className='d-flex p-2  justify-content-between'>
       <h3>Profile</h3>
       <button onClick={() => setOpen(!open)}  className='btn btn-outline-success'> <i class="fa-solid fa-circle-chevron-down fa-2xl"></i></button>
      
       </div>
       <Collapse in={open}>
        <div id="example-collapse-text">
              <label htmlFor='main' className='d-flex justify-content-center' >
              <input id='main' onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})} style={{display:'none'}} type='file'/>
   
 <img width={'300px'} alt='noimage'  src={preview?preview: userProfile.profile?`${BASE_URL}/uploads/${userProfile.profile}`:'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'} />
            </label>
          <input placeholder='Githhub' value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})} className='form-control mb-3 mt-3'></input>
          <input placeholder='Linkdin' value={userProfile.linkdin} onChange={(e)=>setUserProfile({...userProfile,linkdin:e.target.value})} className='form-control'></input>
          
<div className='d-flex justify-content-center mt-2'>
            <button onClick={handledit} className='btn btn-success'>Upload data</button>
  
</div>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile