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
import { serverUrl } from '../services/serverUrl';


function ProjectCard({project}) {
  console.log(project);
  

  console.log(project);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(`${serverUrl}/uploads/${project?.projectImg}`);
  
  return (
    <div>

      <MDBCard className='my-5'>
        <MDBCardImage onClick={handleShow} src={project?`${serverUrl}/uploads/${project?.projectImg}`:'https://th.bing.com/th/id/R.bb81017ace8cbaed9fcbb88cf2280cba?rik=ynMEw4fmarRg6A&riu=http%3a%2f%2fwww.designlab.net.au%2fwp-content%2fuploads%2fproject-manager-roll.jpg&ehk=z2LJ5lHVsEqDlj%2bhovdvyWlj8QRIqvGLVZ0%2btxmjEOU%3d&risl=&pid=ImgRaw&r=0'} height={'200px'} position='top'  alt='Project Image' />
        <MDBCardBody>
          <MDBCardTitle className='text-center fw-bolder'>{project.title}</MDBCardTitle>
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
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <img  src={`${serverUrl}/uploads/${project?.projectImg}`} width={'100%'} height={'200px'} alt="" />
            </div>
            <div className="col">
              <h6>Description : </h6> <p>{project.description}</p>
              <h6>Technologies : </h6>{project.language}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <p className='fs-3' >
          <FaGithub />
          </p>
          <p className="fs-3"> <a routerLink={project.github}><FaLink /></a></p>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard
