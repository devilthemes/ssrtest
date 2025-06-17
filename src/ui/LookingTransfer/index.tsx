"use client";
import { useState } from "react";
import EnquiryNow from "../EnquiryNow";
import { Container, Row, Col } from "react-bootstrap";
export default function LookingTransfer (){
    const [enquiryNowStatus,setEnquiryNowStatus] = useState(false)
    return (
    <><div className="lookingTransfer section">
        <Container>
          <Row>
            <Col>
              <h2 className="sectionHeader">Are you looking to transform your business
              with Software as per your needs?</h2>
              <p>
              Let Our Experts Craft the Ideal Software to Elevate Your Business.
              </p>
              <div className="d-flex justify-content-center">
              <a href="#" className="viewMore mb30" onClick={(e)=>{
                setEnquiryNowStatus(true);
                e.preventDefault();
              }}>
              Let's Talk
              </a>
              </div>
             
            </Col>
          </Row>
        </Container>
      </div>
      
         {
            enquiryNowStatus &&   <EnquiryNow onClose={()=>setEnquiryNowStatus(false)} />
          }</>)
}