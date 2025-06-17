"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface AlertBoxInterface {
  handleClose: () => void;
   status:boolean;
   email?:string;
 
}
export default function EnrollDone({
  handleClose = () => {},
  status=false,
  email="",
 
}: AlertBoxInterface) {
  const [show, setShow] = useState<boolean>(false);


  return (
   
      <Modal show={status} onHide={handleClose} className="modalBox">
        <Modal.Header closeButton>
          <Modal.Title>Enrollment Done!</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Welcome to Change IT Training program. Please check your following email for next steps. We have sent email to the following email id.</p>
        <input onChangeCapture={()=>console.log("sorry")} readOnly type="text" className="form-control" value={email} onChange={()=>console.log("....")} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="link" onClick={handleClose}>
          Ok
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
          Ok
          </Button>
        </Modal.Footer>
      </Modal>
  
  );
}
