"use client";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
export default function PageBreadCrumb() {
  return (
    <div className="pageBreadCrumb">
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/training">Training</Breadcrumb.Item>
              <Breadcrumb.Item active>Data Science</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
