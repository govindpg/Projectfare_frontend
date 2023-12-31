import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import im from "../images/2201_w020_n001_1251a_p30_1251.jpg";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthProjectContext } from "../context/ContextShare";

function Auth({ register }) {
  const {isAuthToken,setIsAuthToken}=useContext(isAuthProjectContext)

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""

  })
   const navigate = useNavigate()


  const Registerform = register ? true : false;

  const handleRegister= async (e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if (!username || !email || !password)
    {
      toast.warning('please fill the form completely')
    }
    else
    {
     const result = await  registerApi(userData)
     console.log(result);
     if(result.status===200)
     {
      toast.success(`${result.data.username} registered successfully`) 
      setUserData({
        username:"",email:"",password:""
      })
      navigate('/login')

        
     }
     else
     {
      toast.error(`${result.response.data}`)
     }
    }
  }

const handleLogin = async(e)=>{
  e.preventDefault()
  const{email,password}=userData
  if(!email || !password){
    toast.warning('please fill all the fields')
  }else{
    const result = await loginApi(userData)
    console.log(result);
    if(result.status ===200){
      //store data ,key:value both in string
      sessionStorage.setItem('Exisitinguser',JSON.stringify(result.data.existingUser))
      sessionStorage.setItem('token',result.data.token)

      toast.success("login sucessfuly")
      setIsAuthToken(true)
      setUserData({
        username:"",email:"",password:""

      })
      setTimeout(() => {
         navigate("/");
      }, 2000);
     
    }else{
      toast.error('login failed')
    }
  }
}

  return (
    <div>
      
      <Header />
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="container w-75">
          <Link to={"/"}>Back to Home</Link>
          <Card
            style={{ boxShadow: "2px " }}
            className=" bg-success mb-5 rounded"
          >
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-item-center"
              >
                <img width={"100%"} src={im} alt=""></img>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-center flex-column align-item-center">
                  <h3 className="mt-4 text-center">Project Vista</h3>
                  <h5 className="text-center mt-2">
                    {Registerform ? " sign up to account " : "sign in"}
                  </h5>
                  <div>
                    
                      <form>
                        {
                          Registerform&&
                          <div>
                          <label className="form-label">Enter username</label>{" "}
                          <input className="form-control w-75 " onChange={(e)=>setUserData({...userData,username:e.target.value})} placeholder="enter your id"></input>
                        </div>
                        }
                        
                        <div>
                          <label className="form-label">Enter email id</label>{" "}
                          <input className="form-control w-75" onChange={(e)=>setUserData({...userData,email:e.target.value})}  placeholder="enter your Email"></input>
                        </div>
                        <div>
                          <label className="form-label">Enter password</label>{" "}
                          <input className="form-control w-75" onChange={(e)=>setUserData({...userData,password:e.target.value})} placeholder="enter your Password"></input>
                        </div>
                        
                        {
                          Registerform?
                          <div>   <button  onClick={handleRegister} className="btn btn-primary mt-3">Register here</button>
                          <p>Already a user <Link to={'/login'}>Login here</Link></p></div>
                       
                          :
                          <div>
                                 <button onClick={handleLogin} className="btn btn-primary mt-3">sign in</button>
                        <p>New User <Link to={'/register'}>Register here</Link></p>
                          </div>
                     
                        }
                       
                      </form>
                      
                     
                    
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
}

export default Auth;
