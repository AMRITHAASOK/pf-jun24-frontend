import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <MDBCard>
        <MDBCardImage onClick={handleShow} src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle className='text-center fw-bolder'>Card title</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <img src="https://th.bing.com/th/id/OIP.sW5-iRSupGOayP25Zud9dQHaFO?rs=1&pid=ImgDetMain" width={'100%'} alt="" />
            </div>
            <div className="col">
              <h6>Description : </h6> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio iusto ipsam! Sequi praesentium minus eius enim maiores fuga ipsam ducimus, earum, reiciendis at vel voluptate ad architecto! Est, cum.</p>
              <h6>Technologies : </h6> React
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <p className='fs-3' >
          <FaGithub />
          </p>
          <p className="fs-3"><FaLink /></p>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard
