import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import uploadimag from "../images/2201_w020_n001_1251a_p30_1251.jpg";
import { addProjectAPI } from "../services/allApi";
import { addProjectResponseContext } from "../context/ContextShare";

function Probu() {

const{addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

  const [show, setShow] = useState(false);

  // to store the valies in the model
  const [stor, setStor] = useState({
    title: "",
    Language: "",
    github: "",
    website: "",
    overview: "",
    projectimage: "",
  });
  console.log(stor);

  //state to store the image url which we are making
  const [preview, setPreview] = useState("");

  // state to store token
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    stor.projectimage && setPreview(URL.createObjectURL(stor.projectimage)); //url is a predefined methd in js which has crete objecturl which convert file into url
  }, [stor.projectimage]);

  console.log(preview);

  const handleClose = () => {
    setShow(false);
    handleclear();
  };
  const handleShow = () => setShow(true);

  const handleclear = () => {
    setStor({
      title: "",
      Language: "",
      github: "",
      website: "",
      overview: "",
      projectimage: "",
    });
    setPreview("");
  };

  const handleProject = async (e) => {
    e.preventDefault();
    const { title, Language, github, website, overview, projectimage } = stor;
    if (
      !title ||
      !Language ||
      !github ||
      !website ||
      !overview ||
      !projectimage
    ) {
      alert("Please fill out all fields");
    } else {
      //reqbody
      //1.creates an object of formdata vclass -dince we have uploaded data
      const reqBody = new FormData();
      //2 . add data - APPEND()
      reqBody.append("title", title);
      reqBody.append("Language", Language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projectimage", projectimage);

      //reqHeaders
      if (token) {
        const reqHeaders = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        const result = await addProjectAPI(reqBody, reqHeaders);
        console.log(result);

        if (result.status === 200) {
          console.log(result.data);
          alert("sucessfull");
          handleClose()

          setAddProjectResponse(result.data)
        } else {
          alert("something went wrong try again later");
          handleclear();
        }
      }
    }
  };

  return (
    <div>
      {" "}
      <Button onClick={handleShow} variant="primary">
        My Project
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={7}>
              <label htmlFor="im">
                <input
                  type="file"
                  id="im"
                  onChange={(e) =>
                    setStor({ ...stor, projectimage: e.target.files[0] })
                  }
                  style={{ display: "none" }}
                />
                <img
                  width={"400px"}
                  src={
                    stor.projectimage
                      ? preview
                      : "https://assets.materialup.com/uploads/c8a1e109-dca0-4b9e-9aa6-1e339b5ba903/preview.gif"
                  }
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
                      className="form-control"
                      onChange={(e) =>
                        setStor({ ...stor, title: e.target.value })
                      }
                      placeholder="Project Title"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={stor.Language}
                      className="form-control"
                      onChange={(e) =>
                        setStor({ ...stor, Language: e.target.value })
                      }
                      placeholder="Language Used"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={stor.github}
                      className="form-control"
                      onChange={(e) =>
                        setStor({ ...stor, github: e.target.value })
                      }
                      placeholder="Git hub link"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={stor.website}
                      className="form-control"
                      onChange={(e) =>
                        setStor({ ...stor, website: e.target.value })
                      }
                      placeholder="Website link"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      value={stor.overview}
                      onChange={(e) =>
                        setStor({ ...stor, overview: e.target.value })
                      }
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
          <Button onClick={handleProject} variant="primary">
            Add{" "}
          </Button>
          <Button onClick={handleclear} variant="danger">
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Probu;
