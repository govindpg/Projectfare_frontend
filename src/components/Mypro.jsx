import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Probu from "./Probu";
import { userdeleteproject, userprojectAPI } from "../services/allApi";
import { addProjectResponseContext } from "../context/ContextShare";
import EditProject from "./EditProject";

function Mypro() {
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const [userProject, setUserproject] = useState([]);

  const getUserProject = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const result = await userprojectAPI(reqHeaders);
    console.log(result.data);
    setUserproject(result.data);
  };
  useEffect(() => {
    getUserProject();
  }, [addProjectResponse]);

  const handleDelete=async(id)=>{
    const token = sessionStorage.getItem('token')
     const reqHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
    const result = await userdeleteproject(id,reqHeaders)
    console.log(result);
    if(result.status === 200){
      getUserProject()
    }else{
      console.log(result.response.data);
    }
  }
  return (
    <>
      <div className="w-100 border rounded shadow p-3">
        <Row className="d-flex justify-conetent-between">
          <Col className="col-10">
            <h4>My projects</h4>
          </Col>
          <Col className="col-2">
            <Probu />
          </Col>
        </Row>
        <div className="w-100 border mt-3 p-3 rounded">
          {
            userProject?.length>0? 
            userProject?.map((item)=>(
              <> <div className="col-10 border mb-4 p-4 rounded d-flex justify-content-between w-100 ">
              {" "}
              <h3 className="mt-3">{item.title}</h3>
            
            <div className="col-2 d-flex justify-content-center  gap-2 align-items-center">
              <EditProject project={item} />
             <a href={item.github} target="_blank"><i class="fa-brands  fa-github fa-2x"></i></a> 
            <button onClick={()=>handleDelete(item._id)} className="btn "> <i class="fa-solid   fa-trash fa-2x"></i></button> 
            </div></div>
              </>
           
        
            )):        <h5 className="text-danger mt-4">No Projects Uploaded !!</h5>

            }
        </div>
      </div>
    </>
  );
}

export default Mypro;
