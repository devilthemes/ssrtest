import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function TrainingProgram() {
  return (
    <div className="trainingProgram section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
            <h2 className="sectionHeader">Elevate Your Skills with Our IT Training Programs</h2>
            <p className="headerInfo">
              Our hands-on training programs are designed to boost your
              technical expertise.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <div className="item">
              <h3>HTML5 & CSS3</h3>
              <div className="tags">
                <div className="tag">36 Hours</div>
                <div className="tag">Career Role</div>
              </div>
              <Link href="/training/html5">
              <img src="/assets/images/training1.jpg" className="img-fluid" />
              </Link>
              <Link href="/training/html5" className="detail">             
                <span>View details </span>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7784 1.6665L22.6673 10.9998M22.6673 10.9998L13.7784 20.3332M22.6673 10.9998L1.33398 10.9998"
                    stroke="#6941C6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
           
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="item">
              <h3>Java Script</h3>
              <div className="tags">
                <div className="tag">8 Hours</div>
                <div className="tag">Career Role</div>
              </div>
              <Link href="/training/javascript">
              <img src="/assets/images/training1.jpg" className="img-fluid" />
              </Link>
              <Link href="/training/javascript" className="detail">             
                <span>View details </span>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7784 1.6665L22.6673 10.9998M22.6673 10.9998L13.7784 20.3332M22.6673 10.9998L1.33398 10.9998"
                    stroke="#6941C6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
           
              </Link>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={12} md={12} >
            <div className="pagina">
                <a href="#" className="prev"><img src="/assets/images/arrow-right.svg" width="40" height="40" /></a>
                <a href="#" className="next"><img src="/assets/images/arrow-right.svg" width="40" height="40" /></a>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
            <Link href="/training" className="viewMore bigBtn">   View All Training</Link>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}
