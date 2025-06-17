"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface AlertBoxInterface {
  handleClose: () => void;
  status?: boolean;
  title:string;
  desc:string;
  backBtnText?:string;
  cancelBtnText?:string;
  onCancel:()=>void;
}
export default function CancelAlertBox({
  handleClose = () => {},
  onCancel = () => {},
  status = false,
  title="",
  desc="",
  backBtnText="Back",
  cancelBtnText ="Cancel"
}: AlertBoxInterface) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(status);
  }, [status]);
  return (
  
      <Modal show={show} onHide={handleClose} className="modalBox">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{desc}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
           {backBtnText}
          </Button>
          <Button variant="danger" onClick={onCancel}>
           {cancelBtnText}
          </Button>
        </Modal.Footer>
      </Modal>
   
  );
}
