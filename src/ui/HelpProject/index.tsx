"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EnquiryNow from "../EnquiryNow";
export default function HelpProject() {
  const [enquiryNowStatus, setEnquiryNowStatus] = useState(false);
  return (
    <>
      <div className="needHelp section">
        <Container>
          <Row>
            <Col>
              <h3 className="h3"> Need help with a project ?</h3>
              <h2 className="h2 sectionHeader">Let's build something awesome together!</h2>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-center d-flex">
              <a
                href="#"
                className="bigBtn viewMore"
                onClick={(e) => {
                  setEnquiryNowStatus(true);
                  e.preventDefault();
                }}
              >
                Let's Talk
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      {enquiryNowStatus && (
        <EnquiryNow onClose={() => setEnquiryNowStatus(false)} />
      )}
    </>
  );
}
