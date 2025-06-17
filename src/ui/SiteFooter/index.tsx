import { Container, Row, Col } from "react-bootstrap";
import HelpProject from "../HelpProject";
import Link from "next/link";
export default function SiteFooter() {
  return (
    <>
    <HelpProject />
    <footer className="siteFooter">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={8} className="noMobile">
            <Row>
              <Col>
                <h3>Our Services</h3>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <nav>
                  <ul>
                    <li>
                      <Link href="/training">Training Services</Link>
                    
                    </li>
                    <li>
                    <Link href="/services">Software Development</Link>
                    </li>
                    <li>
                      <Link href="/services/program-and-project-management">Program & Project Management</Link>
                    </li>
                  
                  </ul>
                </nav>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <nav>
                  <ul>
                  <li>
                    <Link href="/services/it-operation/">IT Operation & Help Desk</Link>
                    </li>
                    <li>
                    <Link href="/services/cloude-services/"> Cloude Services & DevOps</Link>
                    </li>
                    <li>
                    <Link href="/services/quality-assurance/"> Quality Assurance</Link>
                    </li>
                   
                  </ul>
                </nav>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <nav>
                  <ul>
                  <li>
                    <Link href="/services/contact-center">   Contact Centre</Link>
                    </li>
                    <li>
                    <Link href="/services/digital-marketing">   Digital Marketing</Link>
                    </li>
                    
                  </ul>
                </nav>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="emaillink">hello@changeIT.com</div>
            <div className="social">
              <strong>Follow us:</strong>
              <div className="socialLinks">
                <a href="#">
                  <img src="/assets/images/insta.svg" />
                </a>

                <a href="#">
                  <img src="/assets/images/Linkedin.svg" />
                </a>

                <a href="#">
                  <img src="/assets/images/twitter.svg" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} className="copyright">
          &copy; Change it 2025. All rights reserved.
          </Col>
          <Col sm={12} md={6} lg={6}  className="privacy">
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </Col>
        </Row>
      </Container>
      
    </footer>
    </>
    
  );
}
