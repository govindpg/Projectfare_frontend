import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BASE_URL } from '../services/baseurl';
import { editprojectAPI } from '../services/allApi';


function EditProject({project}) {
  const [show, setShow] = useState(false);
  //state to store value
  const [stor, setStor] = useState({
    title: project.title,
    Language: project.Language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectimage: "",
  });

  const[preview,setPreview]=useState('')

  const handleClose = () => {
    setShow(false);
  
  };
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(stor.projectImage){
      setPreview(URL.createObjectURL(stor.projectImage)) 

    }
  },[stor.projectImage])

  const handleclear=()=>{
    setStor({
      id:project._id,
      title: project.title,
      Language: project.Language,
      github: project.github,
      website: project.website,
      overview: project.overview,
      projectimage: "",
    })
    setPreview('')
  }

  const handleUpdate=async(e)=>{
    e.preventDefault()

    const{id,title,Langauge,github,website,overview,projectImage}=stor

    if(!title || !Langauge || !github || !website || !overview){
      alert('please fill the form completerly')
    }else{
         const reqBody = new FormData()

    reqBody.append("title",title)
    reqBody.append("Language",Langauge)
    reqBody.append("github",github)
    reqBody.append("website", website)
    reqBody.append("overview", overview)
    preview?reqBody.append("projectImage",projectImage):reqBody.append('projectImage',project.projectImage)
    const token = sessionStorage.getItem('token')

    if(preview){
      const reqHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
      const result = await editprojectAPI(id,reqBody,reqHeaders)
      console.log(result);
    }else{
      const reqHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      const result = await editprojectAPI(id,reqBody,reqHeaders)
      console.log(result);
    }
    }
 
   
  }
  return (
    <>
            <button onClick={handleShow} className="btn shadow"> <i class="fa-solid  fa-pen-to-square fa-2x"></i></button> 

            <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={7}>
              <label htmlFor="im">
                <input
                  type="file"
                  id="im"
                  style={{ display: "none" }}
                  onChange={e=>setStor({...stor,projectImage:e.target.files[0]})}
                />
                <img
                  width={"400px"}
                  src={preview?preview:
                    `${BASE_URL}/uploads/${project.projectImage}`}
                  alt="noimage"
                ></img>
              </label>
            </Col>
            <Col md={5}>
              <div>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={stor.title}
                      onChange={e=>setStor({...stor,title:e.target.value})}
                      className='p-2 w-100 '
                      placeholder="Project Title"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={stor.Language}
                      onChange={e=>setStor({...stor,Language:e.target.value})}

                      className='p-2 w-100 '
                      placeholder="Language Used"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={stor.github}
                      onChange={e=>setStor({...stor,github:e.target.value})}

                      className='p-2 w-100 '
                      placeholder="Git hub link"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={stor.website}
                      onChange={e=>setStor({...stor,website:e.target.value})}

                      className='p-2 w-100 '
                      placeholder="Website link"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      value={stor.overview}
                      onChange={e=>setStor({...stor,overview:e.target.value})}

                      rows={3}
                      placeholder="Project Overview"
                    ></textarea>
                  </div>
                </form>
                          
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdate}  variant="primary">
            update{" "}
          </Button>
          <Button onClick={handleclear} variant="danger">
            Clear
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditProject