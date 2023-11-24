import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import im from "../images/2201_w020_n001_1251a_p30_1251.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
function Auth({ register }) {
  return (
    <div>
      <Header />
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="container w-75">
              <Link to={'/'}>Back to Home</Link>
          <Card style={{boxShadow:'2px '}} className=" bg-success mb-5 rounded">
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-item-center"
              >
                <img width={"100%"} src={im} alt=""></img>
              </Col>
              <Col
                className="d-flex justify-content-center align-item-center p-4"
                md={6}
              >
                <h3 className="mt-4">Project Vista</h3>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Auth;
